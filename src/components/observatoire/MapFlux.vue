<template>
  <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
    <div class="fr-col">
      <div class="fr-callout">
        <h3 class="fr-callout__title">Carte de Flux</h3>
        <div id="map"></div>
        <o-loading v-model:active="isLoading" fullPage>
        </o-loading>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import maplibregl from 'maplibre-gl'
import type { Map } from 'maplibre-gl'
import * as turf from '@turf/helpers'
import bbox from '@turf/bbox'
import type { AnalyseInterface } from '@/interfaces/observatoire/helpersInterfaces'
import type { FluxData } from '@/interfaces/observatoire/dashboardInterfaces'
import { MapboxLayer } from '@deck.gl/mapbox/typed'
import { ArcLayer } from '@deck.gl/layers/typed'
import { Deck } from '@deck.gl/core/typed'
import axios from 'axios'
import { useProgrammatic } from '@oruga-ui/oruga-next'
import { ref, Ref, shallowRef, markRaw, onMounted, watch } from 'vue'
import { useStore } from '@nanostores/vue'
import { territory, period } from '@/stores/dashboard'
import { classWidth, jenks } from './helpers/analyses'

const map = shallowRef<Map>()
const deck = shallowRef<Deck>()
const data:Ref<FluxData[]> = ref([])
const analyse:Ref<AnalyseInterface[]> = ref([])
const { oruga } = useProgrammatic()
const isLoading = ref(false)
const isHovering = ref(false)
const $territory = useStore(territory)
const $period = useStore(period)

onMounted(async () => {
  createMap()
  await getData()
  await jenksAnalyse()
  await createDeck(addArcLayer())
  addLayers()
})

watch(data, async () => {
 
})

watch($period, async () => {
  await getData()
  const bounds = getBbox()
  map.value!.fitBounds(bounds, {padding: 50})
  deck.value!.setProps({layers:[addArcLayer()]})
})

function createMap() {
  map.value = markRaw(new maplibregl.Map({
    container: 'map',
    style: 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json',
    center: [2.087, 45.5],
    zoom: 4,
    attributionControl: false,
  })) 
  map.value.scrollZoom.disable()
  map.value.addControl(new maplibregl.NavigationControl({}), 'top-right')
  map.value.addControl(new maplibregl.AttributionControl({
      compact: true
  }))
}

async function createDeck(layer:any) {
  deck.value = markRaw(new Deck({
    gl: map.value!.painter.context.gl,
    onHover: ({object}:any) => (isHovering.value = Boolean(object)),
    getCursor: ({isDragging}:any) => (isDragging ? 'grabbing' : (isHovering.value ? 'pointer' : 'grab')),
    layers:[layer],
    getTooltip:addTooltip()
  }))
}

function addArcLayer(){
  return new ArcLayer({
    id: 'flux-layer',
    data:data.value,
    opacity:0.3,
    pickable: true,
    getWidth: (d:FluxData) => classWidth( d.passengers,analyse.value),
    getSourcePosition: (d:FluxData) => [d.lng_1,d.lat_1],
    getTargetPosition: (d:FluxData) => [d.lng_2,d.lat_2],
    getSourceColor: [0,0,145],
    getTargetColor:  [0,0,145],
  })
}

function addLayers() {
  map.value!.on('load', () => {
    map.value!.addLayer(new MapboxLayer({id: 'flux-layer', deck}))
  })
}

async function getData(){
  try{
    isLoading.value = true
    const response = await axios.get(`/monthly_flux?code=${$territory.value.territory}&type=com&observe=country&year=${$period.value.year}&month=${$period.value.month}`)
    if(response.status === 204){
      oruga.notification.open({
        message: response.data.message,
      })
    }
    if(response.status === 200){
      data.value = response.data.result.data
    }
  
  } catch (err){
    if(axios.isAxiosError(err)){
      oruga.notification.open({
        message: err.response?.data.error.data,
      })
    }
  } finally {
    isLoading.value = false
  }
}

async function jenksAnalyse(){
  if($territory.value.type !== 'country' ){ 
  analyse.value = jenks(data.value,'passengers',['#000091','#000091','#000091','#000091','#000091','#000091'],[1,3,6,12,24,48])
  } else {
  analyse.value = jenks(data.value,'passengers',['#000091','#000091','#000091'],[3,12,48])
  }
}

function getBbox(){
  const coords = data.value.map(d => {return [[d.lng_1,d.lat_1],[d.lng_2,d.lat_2]]})
    .reduce((acc, val) => acc.concat(val), [])
  const bounds = $territory.value.territory == 'XXXXX' ? [-5.225,41.333,9.55,51.2] : bbox(turf.multiPoint(coords))
  return bounds
}

function addTooltip(){
  return ({object}:any) => object && {
    html: `<div class="tooltip-title"><b>${object.ter_1} - ${object.ter_2}</b></div>
    <div>${object.passengers} passagers transportés</div>
    <div>${object.distance.toLocaleString()} Km parcourus</div>`,
    className:'fr-callout',
    style: {
      color:'#000',
      backgroundColor: '#fff',
      fontSize: '1.1em',
      width:'250px',
      height:'110px',
      left:'-125px',
      top:'-110px'
    }
  }
}

</script>

<style lang="scss">
  @import 'maplibre-gl/dist/maplibre-gl.css';
  #map{
    height: 400px;
    width: 100%;
  }
</style>
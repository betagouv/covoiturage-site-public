<template>
  <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
    <div class="fr-col">
      <div class="fr-callout">
        <h3 class="fr-callout__title">Carte de Flux</h3>
        <o-loading v-model:active="loading" fullPage>
        </o-loading>
        <div id="map"></div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useMap } from './helpers/maps'
import { useApi } from './helpers/api'
import { classWidth, jenks } from './helpers/analyses'
import type { AnalyseInterface } from '@/interfaces/observatoire/helpersInterfaces'
import type { FluxData } from '@/interfaces/observatoire/dashboardInterfaces'
import type { PickingInfo } from '@deck.gl/core/typed'
import { MapboxOverlay } from '@deck.gl/mapbox/typed'
import { ArcLayer } from '@deck.gl/layers/typed'
import type { LngLatBoundsLike } from 'maplibre-gl'
import * as turf from '@turf/helpers'
import bbox from '@turf/bbox'
import { useStore } from '@nanostores/vue'
import { territory, period } from '@/stores/dashboard'
import { ref, Ref, watch, computed } from 'vue'

const deck = new MapboxOverlay({
  interleaved: true,
  onHover: (object) => (isHovering.value = Boolean(object)),
  getCursor: (isDragging) => (isDragging ? 'grabbing' : (isHovering.value ? 'pointer' : 'grab')),
  getTooltip:addTooltip(),
  layers: []
})

const map = useMap({
  map:{
    container: 'map',
    style: 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json',
    center: [2.087, 45.5],
    zoom: 4,
    attributionControl: false,
    antialias: true,
  },
  scrollZoom: false,
  controls: {
    position: 'top-right',
    attribution: {
      compact: true,
    },
  },
  deckOverlay : deck
})
const $territory = useStore(territory)
const $period = useStore(period)
const url = computed(() => {
  return `/monthly_flux?code=${$territory.value.territory}&type=com&observe=${$territory.value.type}&year=${$period.value.year}&month=${$period.value.month}`
})
const {loading, data } = useApi<FluxData[]>(url,{method:'get'})
const analyse:Ref<AnalyseInterface[]> = ref([])
const isHovering = ref(false)

watch(data,updateMap)

function addArcLayer(){
  return new ArcLayer({
    id: 'flux-layer',
    data:data.value,
    opacity:0.3,
    pickable: true,
    getWidth: (d:FluxData) => classWidth(d.passengers,analyse.value),
    getSourcePosition: (d:FluxData) => [d.lng_1,d.lat_1],
    getTargetPosition: (d:FluxData) => [d.lng_2,d.lat_2],
    getSourceColor: [0,0,145],
    getTargetColor:  [0,0,145],
  })
}

async function updateMap(){
  await jenksAnalyse()
  const bounds = getBbox()
  map.value!.fitBounds(bounds as LngLatBoundsLike, {padding: 50})
  deck.setProps({layers: [addArcLayer()]})
}

async function jenksAnalyse(){
  if (data.value){
    $territory.value.type !== 'country' 
    ? analyse.value = jenks(data.value,'passengers',['#000091','#000091','#000091','#000091','#000091','#000091'],[1,3,6,12,24,48])
    : analyse.value = jenks(data.value,'passengers',['#000091','#000091','#000091'],[3,12,48])
  }
}

function getBbox(){
  const coords = data.value!.map(d => {return [[d.lng_1,d.lat_1],[d.lng_2,d.lat_2]]})
    .reduce((acc, val) => acc.concat(val), [])
  const bounds = $territory.value.territory == 'XXXXX' ? [-5.225,41.333,9.55,51.2] : bbox(turf.multiPoint(coords))
  return bounds
}

function addTooltip(){
  return ({object}:PickingInfo) => object && {
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
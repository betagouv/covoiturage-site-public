<template>
  <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
    <div class="fr-col">
      <div class="fr-callout">
        <h3 class="fr-callout__title">{{ props.title }}</h3>
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import maplibregl from 'maplibre-gl'
import type { Map } from 'maplibre-gl'
import { shallowRef, markRaw, onMounted } from 'vue'

type Props = {
  title: String
}
const props = defineProps<Props>()
const map = shallowRef<Map>()

onMounted(() => {
  createMap()
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
</script>

<style lang="scss">
  @import 'maplibre-gl/dist/maplibre-gl.css';
  #map{
    height: 400px;
    width: 100%;
  }
</style>
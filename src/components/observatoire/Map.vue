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
import { onMounted } from 'vue'

type Props = {
  title: String
}
const props = defineProps<Props>()

let map:Map

onMounted(() => {
  createMap()
})

function createMap() {
    map = new maplibregl.Map({
      container: 'map',
      style: 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json',
      center: [4.5, 45.6],
      zoom: 7,
      attributionControl: false,
    })
    map.scrollZoom.disable()
    map.addControl(new maplibregl.NavigationControl({}), 'top-right')
    map.addControl(new maplibregl.AttributionControl({
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
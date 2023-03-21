<template>
  <div class="column">
    <div id="map"></div>
  </div>
</template>

<script setup lang="ts">
import { Map, NavigationControl, AttributionControl } from 'maplibre-gl'
import { onMounted } from 'vue'

let map:Map

onMounted(() => {
    createMap()
  })

function createMap() {
    map =  new Map({
      container: 'map',
      style: 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json',
      center: [4.5, 45.6],
      zoom: 7,
      attributionControl: false,
    })
    map.scrollZoom.disable()
    map.addControl(new NavigationControl({}), 'top-right')
    map.addControl(new AttributionControl({
        compact: true
    }))
  }
</script>

<style lang="scss">
  @import 'maplibre-gl/dist/maplibre-gl.css';
  #map{
    height: 300px;
    width: 500px;
  }
</style>
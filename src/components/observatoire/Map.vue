<template>
  <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
    <div class="fr-col">
        <div class="fr-callout">
          <h3 class="fr-callout__title ">{{props.title}}</h3>
          <p class="fr-callout__text">
            <div id="map"></div>
          </p>
        </div>
      </div>
  </div>
</template>

<script lang="ts">

import { Map, NavigationControl, AttributionControl } from 'maplibre-gl'


export default {
  props: {
    title: String
  },
  setup(props){
    function createMap() {
      const map =  new Map({
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
    return { props, createMap }
  },
  mounted(){
    this.createMap()
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
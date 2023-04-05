import type { AttributionOptions, ControlPosition, MapOptions } from "maplibre-gl"
import type { MapboxOverlay } from '@deck.gl/mapbox/typed'

export interface AnalyseInterface {
  val:number,
  color:[number,number,number],
  width:number
}

export interface MapInterface {
  map:MapOptions,
  scrollZoom:boolean,
  controls:{
    position?:ControlPosition,
    attribution?:AttributionOptions,
  },
  deckOverlay?:MapboxOverlay
}
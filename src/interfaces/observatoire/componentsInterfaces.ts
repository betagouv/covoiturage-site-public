import  type {  LayersList, PickingInfo } from '@deck.gl/core/typed'
import { LngLatBoundsLike } from 'mapbox-gl'

export interface MapInterface{
  title?: string,
  height?: string | number,
  width?: string | number,
  initialView?: any,
  mapStyle?: string, 
}

export interface DeckMapInterface extends MapInterface{
  layers?:  LayersList
  tooltip?: ((info: PickingInfo) => DeckTooltipContent) | null,
  bounds?: LngLatBoundsLike, 
}

export interface DeckTooltipContent{
  html: string,
  className: string,
  style: object,
}

export interface SearchParamsInterface{
  code: string,
  type: string,
  observe: string,
  year: number,
  month: number,
}
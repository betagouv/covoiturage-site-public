import  type {  LayersList, PickingInfo } from '@deck.gl/core/typed'
import { LngLatBoundsLike } from 'mapbox-gl'
import { ReactNode } from 'react'

export interface MapInterface{
  title?: string,
  height?: string | number,
  width?: string | number,
  initialView?: any,
  mapStyle?: string,
  bounds?: LngLatBoundsLike,
  children?: ReactNode, 
}

export interface DeckMapInterface extends MapInterface{
  layers?:  LayersList
  tooltip?: ((info: PickingInfo) => DeckTooltipContent) | null,
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
  map?: number,
  graph?: number,
}
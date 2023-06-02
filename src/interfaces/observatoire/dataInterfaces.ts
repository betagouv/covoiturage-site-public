import { Feature } from "maplibre-gl";

export interface FluxDataInterface{
  ter_1:string,
  lng_1:number,
  lat_1:number,
  ter_2:string,
  lng_2:number,
  lat_2:number,
  passengers:number,
  distance:number,
  duration:number,
}

export interface DensiteDataInterface{
  hex:string,
  count:number,
}

export interface OccupationDataInterface{
  territory: string;
  l_territory: string;
  journeys: number;
  has_incentive: number;
  occupation_rate: number;
  geom: Feature;
}

export interface EvolDataInterface{
  year:number,
  month:number,
}

export interface EvolJourneysDataInterface extends EvolDataInterface{
  journeys:number,
}
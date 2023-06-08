import { Feature } from "maplibre-gl";

export interface KeyFiguresDataInterface{
  territory: string;
  l_territory: string;
  passengers: number;
  distance: number;
  duration: number;
  journeys: number;
  intra_journeys: number;
  trips: number;
  has_incentive: number;
  occupation_rate: number;
}


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

export interface TerritoryListInterface{
  territory:string,
  l_territory:string,
  type:string,
}

export interface EvolDataInterface{
  year:number,
  month:number,
}

export interface EvolJourneysDataInterface extends EvolDataInterface{
  journeys:number,
}
export interface EvolDistanceDataInterface extends EvolDataInterface{
  distance:number,
}

export interface DistributionDistanceDataInterface {
  territory:string,
  l_territory:string,
  direction:string,
  distances: {
    dist_classes:string
    journeys:number,
  }[]
}
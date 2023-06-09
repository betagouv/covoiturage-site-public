import { Feature } from 'maplibre-gl';
import { Direction, Distance, PerimeterLabel, PerimeterType } from './Perimeter';

export interface KeyFiguresDataInterface {
  territory: PerimeterType;
  l_territory: PerimeterLabel;
  passengers: number;
  distance: number;
  duration: number;
  journeys: number;
  intra_journeys: number;
  trips: number;
  has_incentive: number;
  occupation_rate: number;
}

export interface FluxDataInterface {
  ter_1: PerimeterType;
  lng_1: number;
  lat_1: number;
  ter_2: PerimeterType;
  lng_2: number;
  lat_2: number;
  passengers: number;
  distance: number;
  duration: number;
}

export interface DensiteDataInterface {
  hex: string;
  count: number;
}

export interface OccupationDataInterface {
  territory: PerimeterType;
  l_territory: PerimeterLabel;
  journeys: number;
  has_incentive: number;
  occupation_rate: number;
  geom: Feature;
}

export interface TerritoryListInterface {
  territory: PerimeterType;
  l_territory: PerimeterLabel;
  type: PerimeterType;
}

export interface EvolDataInterface {
  year: number;
  month: number;
}

export interface EvolJourneysDataInterface extends EvolDataInterface {
  journeys: number;
}
export interface EvolDistanceDataInterface extends EvolDataInterface {
  distance: number;
}

export interface DistributionDistanceDataInterface {
  territory: PerimeterType;
  l_territory: PerimeterLabel;
  direction: Direction;
  distances: Array<Distance>;
}

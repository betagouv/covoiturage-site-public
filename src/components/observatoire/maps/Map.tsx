'use client'
import MapGL from 'react-map-gl';
import { NavigationControl } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { MapInterface } from '@/interfaces/observatoire/componentsInterfaces';
import 'maplibre-gl/dist/maplibre-gl.css';

const defaultView = {
  latitude: 46.9,
  longitude: 1.7,
  zoom: 5
};

const Map = (props:MapInterface) => {
  return (
    <div className="fr-callout">
      <h3 className="fr-callout__title">{ props.title }</h3>
      <MapGL 
        mapLib={maplibregl}
        initialViewState={props.initialView ? props.initialView : defaultView}
        style={{
          width: props.width ? props.width : '100%', 
          height: props.height? props.height : '60vh'
        }}
        mapStyle={props.mapStyle}
      >
        <NavigationControl />
      </MapGL>
    </div>
  );
};

export default Map;
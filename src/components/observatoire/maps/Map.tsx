'use client';
import MapGL from 'react-map-gl';
import { NavigationControl, MapRef } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { MapInterface, ViewInterface } from '@/interfaces/observatoire/componentsInterfaces';
import { useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = (props: MapInterface) => {
  const mapRef = useRef<MapRef>(null);
  const defaultView: ViewInterface = {
    latitude: 46.9,
    longitude: 1.7,
    zoom: 5,
  };
  const getBounds = () => {
    return props.bounds ? mapRef.current?.fitBounds(props.bounds, { padding: 20 }) : [];
  };
  return (
    <div className='fr-callout'>
      <h3 className='fr-callout__title'>{props.title}</h3>
      <MapGL
        mapLib={maplibregl}
        initialViewState={props.initialView ? props.initialView : defaultView}
        style={{
          width: props.width ? props.width : '100%',
          height: props.height ? props.height : '60vh',
        }}
        mapStyle={props.mapStyle}
        onLoad={getBounds}
      >
        <NavigationControl />
        {props.children}
      </MapGL>
    </div>
  );
};

export default Map;

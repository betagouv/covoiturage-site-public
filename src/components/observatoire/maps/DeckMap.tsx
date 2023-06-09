'use client';
import { useRef } from 'react';
import { MapboxOverlay, MapboxOverlayProps } from '@deck.gl/mapbox/typed';
import MapGL, { MapRef, useControl, NavigationControl } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import Legend from './Legend';
import { DeckMapInterface } from '@/interfaces/observatoire/componentsInterfaces';
//css
import 'maplibre-gl/dist/maplibre-gl.css';

function DeckGLOverlay(
  props: MapboxOverlayProps & {
    interleaved?: boolean;
  },
) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));
  overlay.setProps(props);
  return null;
}

const DeckMap = (props: DeckMapInterface) => {
  const mapRef = useRef<MapRef>(null);
  const defaultView = {
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
        ref={mapRef}
        mapLib={maplibregl}
        initialViewState={props.initialView ? props.initialView : defaultView}
        style={{
          width: props.width ? props.width : '100%',
          height: props.height ? props.height : '60vh',
        }}
        mapStyle={props.mapStyle}
        onLoad={getBounds}
      >
        <DeckGLOverlay layers={props.layers} getTooltip={props.tooltip} />
        <NavigationControl />
        <Legend title={props.title} />
      </MapGL>
    </div>
  );
};

export default DeckMap;

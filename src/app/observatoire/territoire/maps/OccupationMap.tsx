'use client'
import { fr } from '@codegouvfr/react-dsfr';
import { useApi } from '@/hooks/useApi';
import type { OccupationDataInterface } from '@/interfaces/observatoire/dataInterfaces'
import { jenks, classColor, getPeriod } from '@/helpers/analyse';
import { featureCollection, feature } from '@turf/helpers';
import bbox from'@turf/bbox';
import Map from '@/components/observatoire/maps/Map';
import { Source, Layer, LayerProps, Popup } from 'react-map-gl';
import { FeatureCollection } from 'geojson';
import { SearchParamsInterface } from '@/interfaces/observatoire/componentsInterfaces';
import { LngLatBoundsLike } from 'mapbox-gl';
import Legend from '@/components/observatoire/maps/Legend';
import { useMemo } from 'react';


export default function OccupationMap({title, params}:{title:string, params:SearchParamsInterface}) {
  const mapTitle = title;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/monthly_occupation?code=${params.code}&type=${params.type}&observe=${params.observe}&year=${params.year}&month=${params.month}`;
  const { data, error, loading} = useApi<OccupationDataInterface[]>(url);
  const geojson = useMemo(() => {
    const occupationData = data ? data : [];
    return featureCollection(occupationData.map(d => feature(d.geom,{
      territory:d.territory,
      l_territory:d.l_territory,
      journeys:d.journeys,
      occupation_rate:d.occupation_rate
    }))) as unknown as FeatureCollection;
  }, [data]);
  const layer:LayerProps = {
    id: 'occupation',
    type: 'circle',
    paint: {
      'circle-radius': {
        property: 'journeys',
        type: 'exponential',
        stops: [
          [0,0],
          [10, 5],
          [100, 10],
          [10000,20],
          [100000, 40]
        ]
      },   
      'circle-color': {
        property: 'occupation_rate',
        type: 'exponential',
        stops: [
          [2, '#E5E5F4'],
          [2.25, '#9A9AFF'],
          [2.5, '#7F7FC8'],
          [2.75, '#000091'],
          [3, '#000074'],
          [4, '#00006D']
        ]
      },
      'circle-stroke-color': 'black',
      'circle-stroke-width': 1,
      'circle-opacity': 0.8
    }
  };
  const mapStyle = 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json';
  const categories=[
    {color:[229, 229, 224],val:'>= 100 000',width:40,active:true},
    {color:[229, 229, 224],val:'10 000',width:20,active:true},
    {color:[229, 229, 224],val:'100',width:10,active:true},
    {color:[229, 229, 224],val:'10',width:5,active:true}
  ];
  const analyse=[
    {color:[229, 229, 244],val:2,width:10,active:true},
    {color:[154, 154, 255],val:2.25,width:10,active:true},
    {color:[127, 127, 200],val:2.5,width:10,active:true},
    {color:[0, 0, 145],val:2.75,width:10,active:true},
    {color:[0, 0, 116],val:3,width:10,active:true},
    {color:[0, 0, 109],val:4,width:10,active:true},
  ];
  const bounds = () =>{
    const bounds = params.code === 'XXXXX' ? [-5.225,41.333,9.55,51.2] : bbox(geojson) 
    return bounds as unknown as LngLatBoundsLike
  };
  return (
    <>
      {
        loading && 
        <div className={fr.cx('fr-callout')}>
          <h3 className={fr.cx('fr-callout__title')}>{ title }</h3>
          <div>Chargement en cours...</div>
        </div>
      }
      { 
        error && 
        <div className={fr.cx('fr-callout')}>
          <h3 className={fr.cx('fr-callout__title')}>{ title }</h3>
          <div>{`Un problème est survenu au chargement des données: ${error}`}</div>
        </div>
      }
      {
        !loading && !error &&
        <Map 
          title={mapTitle}
          mapStyle={mapStyle}
          bounds={bounds()}
        >
          <Source id="occupation" type="geojson" data={geojson}>
            <Layer {...layer} />
          </Source>
        </Map>
      }
    </>
  )
}
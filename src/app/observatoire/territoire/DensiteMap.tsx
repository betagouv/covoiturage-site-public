'use client'
import { fr } from '@codegouvfr/react-dsfr';
import { useApi } from '@/hooks/useApi';
import type { DensiteDataInterface } from '@/interfaces/observatoire/dataInterfaces'
import { jenks, classColor } from '@/helpers/analyse';
import { cellsToMultiPolygon } from 'h3-js';
import { multiPolygon } from '@turf/helpers';
import bbox from'@turf/bbox';
import { H3HexagonLayer } from '@deck.gl/geo-layers/typed'
import DeckMap from '@/components/observatoire/maps/DeckMap';
import { SearchParamsInterface } from '@/interfaces/observatoire/componentsInterfaces';
import { LngLatBoundsLike } from 'mapbox-gl';
import Legend from '@/components/observatoire/maps/Legend';

export default function FluxMap({title, params}:{title:string, params:SearchParamsInterface}) {
  const mapTitle = title;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/location?code=${params.code}&type=${params.observe}&start_date=2022-01-01&end_date=2022-01-31&zoom=7`;
  const { data, error, loading} = useApi<DensiteDataInterface[]>(url);
  const mapStyle = 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json';
  const analyse = data ? jenks(data,'count',['#fdd49e','#fdbb84','#fc8d59','#e34a33','#b30000','#000000'],[10,10,10,10,10,10]) : [];
  const layer = new H3HexagonLayer({
    id: 'densite-layer',
    data:data ? data : [],
    opacity:0.4,
    pickable: true,
    extruded: false,
    lineWidthMinPixels: 1,
    getHexagon: d => d.hex,
    getFillColor: d => classColor(d.count, analyse),
    getLineColor: d => [80, 80, 80],
  });
  const bounds = () =>{
    const hexagons = data!.map(d => d.hex)
    const polygon = cellsToMultiPolygon(hexagons!, true)
    const bounds = params.code === 'XXXXX' ? [-5.225,41.333,9.55,51.2] : bbox(multiPolygon(polygon)) 
    return bounds as unknown as LngLatBoundsLike
  }
  const tooltip = ({object}:any) => object && {
    html: `<div><b>${object.count.toLocaleString()}</b> départ(s) ou arrivée(s) de covoiturage dans cette maille hexagonale</div>`,
    className:'fr-callout',
    style: {
      color:'#000',
      backgroundColor: '#fff',
      fontSize: '0.8em',
      width:'250px',
      height:'80px',
      left:'-125px',
      top:'-110px'
    }
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
        <DeckMap 
          title={mapTitle}
          tooltip={tooltip} 
          mapStyle={mapStyle}
          layers={[layer]}
          bounds={bounds()}
        />
      }
    </>
  )
}
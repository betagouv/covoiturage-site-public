'use client';
import DeckMap from '@/components/observatoire/maps/DeckMap';
import { classWidth, jenks } from '@/helpers/analyse';
import { useApi } from '@/hooks/useApi';
import { SearchParamsInterface } from '@/interfaces/observatoire/componentsInterfaces';
import type { FluxDataInterface } from '@/interfaces/observatoire/dataInterfaces';
import { fr } from '@codegouvfr/react-dsfr';
import { ArcLayer } from '@deck.gl/layers/typed';
import bbox from '@turf/bbox';
import { multiPoint } from '@turf/helpers';
import { LngLatBoundsLike } from 'mapbox-gl';

export default function FluxMap({ title, params }: { title: string; params: SearchParamsInterface }) {
  const mapTitle = title;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/monthly_flux?code=${params.code}&type=${params.type}&observe=${params.observe}&year=${params.year}&month=${params.month}`;
  const { data, error, loading } = useApi<FluxDataInterface[]>(url);
  const mapStyle = 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json';
  const analyse = data
    ? jenks(
        data,
        'passengers',
        ['#000091', '#000091', '#000091', '#000091', '#000091', '#000091'],
        [1, 3, 6, 12, 24, 48],
      )
    : [];
  const layer = new ArcLayer({
    id: 'flux-layer',
    data: data ? data : [],
    opacity: 0.3,
    pickable: true,
    getWidth: (d) => classWidth(d.passengers, analyse),
    getSourcePosition: (d) => [d.lng_1, d.lat_1],
    getTargetPosition: (d) => [d.lng_2, d.lat_2],
    getSourceColor: [0, 0, 145],
    getTargetColor: [0, 0, 145],
  });
  const bounds = () => {
    const coords = data
      ?.map((d) => {
        return [
          [d.lng_1, d.lat_1],
          [d.lng_2, d.lat_2],
        ];
      })
      .reduce((acc, val) => acc.concat(val), []);
    const bounds = params.code === 'XXXXX' ? [-5.225, 41.333, 9.55, 51.2] : bbox(multiPoint(coords!));
    return bounds as unknown as LngLatBoundsLike;
  };
  const tooltip = ({ object }: any) =>
    object && {
      html: `<div class="tooltip-title"><b>${object.ter_1} - ${object.ter_2}</b></div>
    <div>${object.passengers} passagers transportés</div>
    <div>${object.distance.toLocaleString()} Km parcourus</div>`,
      className: 'fr-callout',
      style: {
        color: '#000',
        backgroundColor: '#fff',
        fontSize: '1em',
        width: '250px',
        height: '110px',
        left: '-125px',
        top: '-110px',
      },
    };

  return (
    <>
      {loading && (
        <div className={fr.cx('fr-callout')}>
          <h3 className={fr.cx('fr-callout__title')}>{title}</h3>
          <div>Chargement en cours...</div>
        </div>
      )}
      {error && (
        <div className={fr.cx('fr-callout')}>
          <h3 className={fr.cx('fr-callout__title')}>{title}</h3>
          <div>{`Un problème est survenu au chargement des données: ${error}`}</div>
        </div>
      )}
      {!loading && !error && (
        <DeckMap title={mapTitle} tooltip={tooltip} mapStyle={mapStyle} layers={[layer]} bounds={bounds()} />
      )}
    </>
  );
}

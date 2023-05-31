import  Map  from '@/components/observatoire/maps/Map'

export default function Observatoire() {
  const title = 'test'
  const mapStyle = 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json';
  return (
      <Map 
        title={title}
        mapStyle={mapStyle}
      />    
  )
}

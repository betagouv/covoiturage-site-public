import PageTitle from "@/components/common/PageTitle";
import  Map  from '@/components/observatoire/maps/Map';

export default function Page() {
  const title = 'test';
  const mapStyle = 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json';
  return (
    <article id='content'>
      <PageTitle title={title} />
      <Map 
        title={title}
        mapStyle={mapStyle}
      />
    </article>
    
  )
}

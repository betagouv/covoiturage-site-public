import { getPosts } from '@/backend/posts';
import PageTitle from '@/components/common/PageTitle';
import Map from '@/components/observatoire/maps/Map';
import { Config } from '@/config';

export default async function Page() {
  const title = 'Impact actions';
  const mapStyle = Config.get<string>('observatoire.mapStyle');

  // TEST

  return (
    <article id='content'>
      <PageTitle title={title} />
      <Map title={title} mapStyle={mapStyle} />
      {(await getPosts())?.map((post: any) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </article>
  );
}

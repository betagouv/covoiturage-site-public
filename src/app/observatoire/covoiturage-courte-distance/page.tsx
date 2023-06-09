import PageTitle from '@/components/common/PageTitle';
import Definition from './definition';
import Volume from './volume';

export default function Page() {
  const title = 'Le covoiturage courte distance en France';

  return (
    <article id='content'>
      <PageTitle title={title} />
      <Definition />
      <Volume />
    </article>
  );
}

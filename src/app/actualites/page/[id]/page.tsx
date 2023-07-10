import PageTitle from "@/components/common/PageTitle";
import { fr } from "@codegouvfr/react-dsfr";
import ActuCard from "@/components/actualites/ActuCard";
import { cmsHost, cmsInstance, shorten } from "@/helpers/cms";


export default async function ActuPage({ params }: { params: { id: number }}) {
  const { data } = await cmsInstance.items('Articles').readByQuery({
    fields:'*',
    page: params.id,
    filter:{
      status: {
        '_eq': 'published',
      },
    },
    meta:'*',
  });

  const content = {
    pageTitle: `Actualités page ${params.id}`,  
  };

  return (
    <article id='content'>
      <PageTitle title={content.pageTitle} />
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {data &&
          data.map((a, i) => {
            if (i <= 1) return (
              <div key={i} className={fr.cx('fr-col')}>
                <ActuCard 
                  title={a.title}
                  content={shorten(a.content,250)}
                  date={new Date(a.date_created).toLocaleDateString('fr-FR')}
                  href={`/actualites/${a.slug}`}
                  img={`${cmsHost}/assets/${a.img}`}
                  img_legend={a.img_legend}
                  horizontal
                />
              </div>
            )
          })
        }
      </div>      
    </article>
  );
}

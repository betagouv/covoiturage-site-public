import PageTitle from "@/components/common/PageTitle";
import { fr } from "@codegouvfr/react-dsfr";
import ActuCard from "@/components/actualites/ActuCard";
import { cmsHost, cmsInstance, shorten } from "@/helpers/cms";

export default async function Actualites() {
  const { data } = await cmsInstance.items('Articles').readByQuery({
    fields:'*',
    limit:2,
    filter:{
      status: {
        '_eq': 'published',
      },
    },
    meta:'*',
  });

  const content = {
    pageTitle: 'Actualités',
  }

  return (
    <article id='content'>
      <PageTitle title={content.pageTitle} />
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {data &&
          data.map((a, i) => {
            return (
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

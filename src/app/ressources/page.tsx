import PageTitle from "@/components/common/PageTitle";
import { fr } from "@codegouvfr/react-dsfr";
import CategoryTags from "@/components/ressources/CategoryTags";
import RessourceCard from "@/components/ressources/RessourceCard";
import { cmsInstance, cmsHost } from "@/helpers/cms";

export default async function Ressources() {

  const { data } = await cmsInstance.items('Ressources').readByQuery({
    fields:'*,categories.Categories_id.*,file.*',
    filter:{
      status: {
        '_eq': 'published',
      },
    },
    meta:'*',
  });

  const categories =  await cmsInstance.items('Categories').readByQuery({
    fields:'*',
    meta:'*',
  });

  const content = {
    pageTitle: 'Ressources',  
  }

  return (
    <article id='content'>
      <PageTitle title={content.pageTitle} />
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {categories.data && <CategoryTags categories={categories.data} />}
      </div>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {data &&
          data.map((a, i) => {
            return (
              <div key={i} className={fr.cx('fr-col', 'fr-col-md-12')}>
                <RessourceCard 
                  title={a.title}
                  content={a.content}
                  date={new Date(a.date_created).toLocaleDateString('fr-FR')}
                  href={`${cmsHost}/assets/${a.href}`}
                  img={`${cmsHost}/assets/${a.img}`}
                  img_legend={a.img_legend}
                  categories={a.categories}
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

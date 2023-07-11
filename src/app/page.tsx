import CallToAction from "@/components/common/CallToAction";
import ListHighlight from "@/components/common/ListHighlights";
import SectionTitle from "@/components/common/SectionTitle";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import { fr } from "@codegouvfr/react-dsfr";
import { cmsInstance } from "@/helpers/cms";

export default async function Home() {
  const { data } = await cmsInstance.items('Pages').readByQuery({
    filter: {
      slug: { _eq: 'accueil' },
    },
    fields: ['*', 'sections.*', 'sections.item.*','sections.item.highlights.Highlight_id.*'],
    limit: 1,
  });

  const hero = data ? data[0].sections.find((s:any) => s.collection === 'Hero').item : undefined
  const list = data ? data[0].sections.find((s:any) => s.collection === 'List').item : undefined
  const highlights = list.highlights.map((h:any) => h.Highlight_id)
  const tiles = [{
    desc:"<ul><li>test</li></ul>",
    grey: true,
    imageUrl: "//www.gouvernement.fr/sites/default/files/static_assets/placeholder.1x1.png",
    linkProps:{
      href: '#'
    },
    title:"Titre de la tuile"
  },{
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol",
    grey: true,
    imageUrl: "//www.gouvernement.fr/sites/default/files/static_assets/placeholder.1x1.png",
    linkProps:{
      href: '#'
    },
    title:"Titre de la tuile"
  },{
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol",
    grey: true,
    imageUrl: "//www.gouvernement.fr/sites/default/files/static_assets/placeholder.1x1.png",
    linkProps:{
      href: '#'
    },
    title:"Titre de la tuile"
  }
]

  return (
    <article id='content'>
      <CallToAction 
        title={hero.title} 
        content={hero.content} 
        img={hero.img} 
        alt={hero.alt} 
        backgroundColor={hero.background_color} 
        buttons={hero.buttons} 
      />
      <SectionTitle title={list.title} />
      <ListHighlight highlights={highlights} />
      <SectionTitle title='Vous êtes ?' />
      <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        {tiles && tiles.map( (t, i) => 
          <div key={i} className={fr.cx('fr-col-12','fr-col-md-4')}>
            <Tile 
              title={t.title}
              desc={t.desc}
              grey={t.grey}
              imageUrl={t.imageUrl}
              linkProps={t.linkProps}
            />
          </div>
        )}
      </div>
    </article>
  );
}

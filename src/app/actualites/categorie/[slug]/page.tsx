import PageTitle from "@/components/common/PageTitle";
import { fr } from "@codegouvfr/react-dsfr";
import SectionTitle from "@/components/common/SectionTitle";
import ThemesTags from "@/components/actualites/ThemesTags";
import ActuCard from "@/components/actualites/ActuCard";


export default function ActuCategoriePage({ params }: { params: { slug: string }}) {
  const  themes = [
    {id: 1, link:'/', name:'test1'},
    {id: 2, link:'/', name:'test2'},
    {id: 3, link:'/', name:'test3'},
  ];

  const content = {
    pageTitle: `Actualités de la catégorie ${params.slug}`,
    actualites: [
      {
        title:'Titre de l\'actu 1',
        date:'26/06/2023',
        themes:[
          {id: 1, link:'/', name:'test'},
        ],
        categories:[
          {id: 1, link:'/', name:'test'},
          {id: 1, link:'/', name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      },
      {
        title:'Titre de l\'actu 2',
        date:'26/06/2023',
        themes:[
          {id: 1, link:'/', name:'test'},
        ],
        categories:[
          {id: 1, link:'/', name:'test'},
          {id: 1, link:'/', name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      },
      {
        title:'Titre de l\'actu 3',
        date:'26/06/2023',
        themes:[
          {id: 1, link:'/', name:'test'},
        ],
        categories:[
          {id: 1, link:'/', name:'test'},
          {id: 1, link:'/', name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      },
      {
        title:'Titre de l\'actu 4',
        date:'26/06/2023',
        themes:[
          {id: 1, link:'/', name:'test'},
        ],
        categories:[
          {id: 1, link:'/', name:'test'},
          {id: 1, link:'/', name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      },
      {
        title:'Titre de l\'actu 5',
        date:'26/06/2023',
        themes:[
          {id: 1, link:'/', name:'test'},
        ],
        categories:[
          {id: 1, link:'/', name:'test'},
          {id: 1, link:'/', name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      },
      {
        title:'Titre de l\'actu 6',
        date:'26/06/2023',
        themes:[
          {id: 1, link:'/', name:'test'},
        ],
        categories:[
          {id: 1, link:'/', name:'test'},
          {id: 1, link:'/', name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      },
      {
        title:'Titre de l\'actu 7',
        date:'26/06/2023',
        themes:[
          {id: 1, link:'/', name:'test'},
        ],
        categories:[
          {id: 1, link:'/', name:'test'},
          {id: 1, link:'/', name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      },
      {
        title:'Titre de l\'actu 8',
        date:'26/06/2023',
        themes:[
          {id: 1, link:'/', name:'test'},
        ],
        categories:[
          {id: 1, link:'/', name:'test'},
          {id: 1, link:'/', name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      }
    ]
  
  }

  return (
    <article id='content'>
      <PageTitle title={content.pageTitle} />
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {content.actualites &&
          content.actualites.map((a, i) => {
            if (i <= 1) return (
              <div key={i} className={fr.cx('fr-col')}>
                <ActuCard 
                  title={a.title}
                  desc={a.desc}
                  date={a.date}
                  link={a.link}
                  img={a.img}
                  alt={a.alt}
                  categories={a.categories}
                  themes={a.themes}
                  horizontal
                />
              </div>
            )
          })
        }
      </div>
      <SectionTitle title='Filtrer par théme' />
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {themes && <ThemesTags themes={themes} />}
      </div>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {content.actualites &&
          content.actualites.map((a, i) => {
            if (i > 1) return (
              <div key={i} className={fr.cx('fr-col','fr-col-md-4')}>
                <ActuCard 
                  title={a.title}
                  desc={a.desc}
                  date={a.date}
                  link={a.link}
                  img={a.img}
                  alt={a.alt}
                  categories={a.categories}
                  themes={a.themes}
                />
              </div>
            )
          })
        }
      </div>
      
    </article>
  );
}

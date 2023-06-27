import PageTitle from "@/components/common/PageTitle";
import { fr } from "@codegouvfr/react-dsfr";
import ThemesTags from "@/components/actualites/ThemesTags";
import RessourceCard from "@/components/ressources/RessourceCard";

export default function Ressources() {
  const  themes = [
    {id: 1, link:'/', name:'test1'},
    {id: 2, link:'/', name:'test2'},
    {id: 3, link:'/', name:'test3'},
  ];

  const content = {
    pageTitle: 'Ressources',
    ressources: [
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
        {themes && <ThemesTags themes={themes} />}
      </div>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        {content.ressources &&
          content.ressources.map((a, i) => {
            return (
              <div key={i} className={fr.cx('fr-col', 'fr-col-md-12')}>
                <RessourceCard 
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
    </article>
  );
}

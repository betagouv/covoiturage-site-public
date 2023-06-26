import PageTitle from "@/components/common/PageTitle";
import { fr } from "@codegouvfr/react-dsfr";
import HorizontalActuCard from "@/components/actualites/HorizontalActuCard";

export default function Actualites() {
  const content = {
    pageTitle: 'Actualités',
    actualites: [
      {
        title:'Titre de l\'actu',
        date:'26/06/2023',
        categories:[
          {link:'/',name:'test'},
          {link:'/',name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      },
      {
        title:'Titre de l\'actu',
        date:'26/06/2023',
        categories:[
          {link:'/',name:'test'},
          {link:'/',name:'test'},
        ],
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
        img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
        alt:'alt de l`\'image',
        link: '/',
      },
      {
        title:'Titre de l\'actu',
        date:'26/06/2023',
        categories:[
          {link:'/',name:'test'},
          {link:'/',name:'test'},
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
                <HorizontalActuCard 
                  title={a.title}
                  desc={a.desc}
                  date={a.date}
                  link={a.link}
                  img={a.img}
                  alt={a.alt}
                  categories={a.categories}
                />
              </div>
            )
          })
        }
      </div>
    </article>
  );
}

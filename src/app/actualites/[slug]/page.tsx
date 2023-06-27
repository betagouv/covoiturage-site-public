import PageTitle from "@/components/common/PageTitle";
import Share from "@/components/common/Share";
import { Config } from "@/config";
import { fr } from "@codegouvfr/react-dsfr";
import Image from 'next/image';
import { SideMenu } from "@codegouvfr/react-dsfr/SideMenu";
import Tag from "@codegouvfr/react-dsfr/Tag";

export default function ActuSinglePage({ params }: { params: { slug: string }}) {
  const hostUrl = Config.get<string>('next.public_url', 'http://localhost:4200');
  const location = `${hostUrl}/actualites/${params.slug}`;
  const content = {
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
  };
  const share = [
    {
      name:'Facebook', 
      icon:'fr-share__link--facebook', 
      href:`https://www.facebook.com/sharer.php?u=${location}`,
    },
    {
      name:'Twitter', 
      icon:'fr-share__link--twitter', 
      href:`https://twitter.com/intent/tweet?url=${location}`,
    },
    {
      name:'LinkedIn', 
      icon:'fr-share__link--linkedin', 
      href:`https://www.linkedin.com/shareArticle?url=${location}`,
    },
    {
      name:'Email', 
      icon:'fr-share__link--mail', 
      href:`mailto:?subject=${content.title}&body=${content.desc} ${location}`,
    }
  ]
  const relativeContent = [
    {title:'test2', url:'/actualites/test2'},
    {title:'test3', url:'/actualites/test3'},
    {title:'test4', url:'/actualites/test4'},
  ]
  return (
    <article id='actu-content'>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        <div className={fr.cx('fr-col', 'fr-col-md-9')}>
          <PageTitle title={content.title} />
          <ul className={fr.cx('fr-tags-group')}>
            {content.categories &&
              content.categories.map((c, i) => {
                return (
                  <li key={i}>
                    <Tag
                      linkProps={{
                        href: c.link
                      }}
                    >
                      {c.name}
                    </Tag>
                  </li>
                )
              })
            }
          </ul>
          <p>Publié le {content.date}</p>
          <Share social={share} location={location} />
          <figure className={fr.cx('fr-content-media')} role="group">
            <div className={fr.cx('fr-content-media__img')}>
                <Image className={fr.cx('fr-responsive-img')} src={content.img} alt={content.alt} width={1200} height={800} />
            </div>
            <figcaption className={fr.cx('fr-content-media__caption')}>{content.alt}</figcaption>
          </figure>
          <div className={fr.cx('fr-text--lg')}>
            {content.desc}
          </div>
          <a className={fr.cx('fr-link', 'fr-icon-arrow-up-fill', 'fr-link--icon-left')} href="#top">
            Haut de page
          </a>
        </div>
        <SideMenu 
        className={fr.cx('fr-pt-10v')}
        align="right"
        title="Dans cette catégorie :"
        burgerMenuButtonText="Dans cette catégorie :"
        items={relativeContent.map(c => {
          return {
              linkProps: {
                href: c.url
              },
              text: c.title
            }
          }
        )}
        sticky />
      </div>
    </article>
  );
}
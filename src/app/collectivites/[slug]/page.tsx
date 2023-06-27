import PageTitle from "@/components/common/PageTitle";
import Share from "@/components/common/Share";
import { Config } from "@/config";
import { fr } from "@codegouvfr/react-dsfr";
import Image from 'next/image';

export default function CollectiviteSinglePage({ params }: { params: { slug: string }}) {
  const hostUrl = Config.get<string>('next.public_url', 'http://localhost:4200');
  const location = `${hostUrl}/actualites/${params.slug}`;
  const content = {
    title:'Titre de l\'article collectivité',
    date:'26/06/2023',
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
    img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
    alt:'alt de l`\'image',
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
  ];
  return(
    <article id='actu-content'>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
        <div className={fr.cx('fr-col', 'fr-col-md-9')}>
          <PageTitle title={content.title} />
          <p>Publié le {content.date}</p>
          <Share social={share} location={location} />
          <div className={fr.cx('fr-text--lg')}>
            {content.desc}
          </div>
          <figure className={fr.cx('fr-content-media')} role="group">
            <div className={fr.cx('fr-content-media__img')}>
                <Image className={fr.cx('fr-responsive-img')} src={content.img} alt={content.alt} width={1200} height={800} />
            </div>
            <figcaption className={fr.cx('fr-content-media__caption')}>{content.alt}</figcaption>
          </figure>
          <div className={fr.cx('fr-text--lg')}>
            {content.text}
          </div>
          <a className={fr.cx('fr-link', 'fr-icon-arrow-up-fill', 'fr-link--icon-left')} href="#top">
            Haut de page
          </a>
        </div>
      </div>
    </article>
  );
}
import PageTitle from "@/components/common/PageTitle";
import Share from "@/components/common/Share";
import { Config } from "@/config";

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
  return (
    <article id='content'>
      <PageTitle title={content.title} />
      <p>Publié le {content.date}</p>
      <Share social={share} location={location} />
    </article>
  );
}
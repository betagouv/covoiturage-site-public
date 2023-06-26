import PageTitle from "@/components/common/PageTitle";
import { fr } from "@codegouvfr/react-dsfr";

export default function ActuSinglePage({ params }: { params: { slug: string }}) {
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
  return (
    <article id='content'>
      <PageTitle title={content.title} />
      <p>Publié le {content.date}</p>
    </article>
  );
}
import CallToAction from "@/components/common/CallToAction";
import { ButtonProps } from "@codegouvfr/react-dsfr/Button";

export default function Home() {
  const content = {
    hero:{
      title: 'Qu’est-ce que le covoiturage courte distance ?',
      content: `En rejoignant le Registre de preuve de covoiturage (RPC), 
      les autorités organisatrices de la mobilité ont toutes les clés en main pour mettre en place une politique incitative de
       covoiturage courte distance efficace.`,
      buttons:[
        {
          children: 'Tout comprendre',
          linkProps: {
            href: '#',
          },
        },
        {
          children: 'Les chiffres pour la france',
          linkProps: {
            href: '/observatoire/territoire',
          },
          priority:'secondary'
        },
      ]
    },
    sections: [
      
    ],
  }

  return (
    <article id='content'>
      <CallToAction title={content.hero.title} content={content.hero.content} buttons={content.hero.buttons as [ButtonProps, ...ButtonProps[]]}/>
    </article>
  );
}

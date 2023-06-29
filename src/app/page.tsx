import CallToAction from "@/components/common/CallToAction";
import { ButtonProps } from "@codegouvfr/react-dsfr/Button";
import ListHighlight from "@/components/common/ListHighlights";
import SectionTitle from "@/components/common/SectionTitle";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import { fr } from "@codegouvfr/react-dsfr";

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
      {
        title: 'Collectivités, quelles politiques publiques en faveur du covoiturage du quotidien pour votre territoire ?',
        highlights: [
          {
            title: 'Découvrez les chiffres du covoiturage sur votre territoire',
            text: `Aenean lacinia bibendum nulla sed consectetur. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec id elit non mi porta gravida at eget metus. Cras justo odio, 
            dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit 
            sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
            alt:'texte alternatif',
            classes:{
              root: 'fr-highlight--green-emeraude'
            },
            buttons:[
              {
                children: 'Documentation',
                iconId: 'fr-icon-chat-check-fill',
                linkProps: {
                  href: '/documentation',
                },
                priority:'secondary'
              },
              {
                children: 'Découvrir les aides en faveur du covoiturage',
                linkProps: {
                  href: '/observatoire/territoire',
                },
              },
            ] as [ButtonProps, ...ButtonProps[]]
          },
          {
            title: 'Les différentes aides du plan covoiturage',
            text: `Aenean lacinia bibendum nulla sed consectetur. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec id elit non mi porta gravida at eget metus. Cras justo odio, 
            dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit 
            sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            img: 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
            alt:'texte alternatif',
            classes:{
              root: 'fr-highlight--green-emeraude'
            },
            buttons:[
              {
                children: 'Découvrir les aides en faveur du covoiturage',
                linkProps: {
                  href: '/observatoire/territoire',
                },
              },
            ] as [ButtonProps, ...ButtonProps[]]
          }
        ]
      },
      {
        title:'Vous êtes ?',
        tiles:[{
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
      }
    ],
  }

  return (
    <article id='content'>
      <CallToAction title={content.hero.title} content={content.hero.content} buttons={content.hero.buttons as [ButtonProps, ...ButtonProps[]]} />
      <SectionTitle title={content.sections[0].title} />
      <ListHighlight highlights={content.sections[0].highlights} />
      <SectionTitle title={content.sections[1].title} />
      <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        {content.sections[1].tiles && content.sections[1].tiles.map( (t, i) => 
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

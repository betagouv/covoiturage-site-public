'use client'
import CallToAction from "@/components/common/CallToAction";
import Media from "@/components/common/Media";
import { ButtonProps } from "@codegouvfr/react-dsfr/Button";
import { useColors } from "@codegouvfr/react-dsfr/useColors";

export default function TestPage() {
  const theme = useColors();
  const content={
    hero:{
      title: 'Le covoiturage, qu’est-ce que c’est ?',
      subtitle: 'test de sous-titre',
      content: `L’article L. 3132-1 du code des transports définit le covoiturage comme « l’utilisation en commun 
      d’un véhicule terrestre à moteur par un conducteur et un ou plusieurs passagers, effectuée à titre non onéreux,
      excepté le partage des frais, dans le cadre d’un déplacement que le conducteur effectue pour son propre compte.
      Leur mise en relation, à cette fin, peut être effectuée à titre onéreux […] ».`,
      buttons:[
        {
          children: 'Button 1 label (longer)',
          iconId: 'fr-icon-chat-check-fill',
          linkProps: {
            href: '#'
          },
          priority: 'primary'
        }
      ],
      img:'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
      alt:'texte alternatif'
    },
    media:{
      title: 'Le covoiturage, qu’est-ce que c’est ?',
      position:'left',
      img:'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png',
      alt:'texte alternatif',
      text: `L’article L. 3132-1 du code des transports définit le covoiturage comme « l’utilisation en commun 
      d’un véhicule terrestre à moteur par un conducteur et un ou plusieurs passagers, effectuée à titre non onéreux,
      excepté le partage des frais, dans le cadre d’un déplacement que le conducteur effectue pour son propre compte.
      Leur mise en relation, à cette fin, peut être effectuée à titre onéreux […] ».`,
      buttons:[
        {
          children: 'Button 1 label (longer)',
          iconId: 'fr-icon-chat-check-fill',
          linkProps: {
            href: '#'
          },
          priority: 'primary'
        }
      ],
    }
  }
  return(
    <>
      <CallToAction 
        title={content.hero.title} 
        subtitle={content.hero.subtitle} 
        content={content.hero.content} 
        buttons={content.hero.buttons as [ButtonProps, ...ButtonProps[]]}
        backgroundColor={theme.decisions.background.alt.blueFrance.hover}
        img={content.hero.img}
        alt={content.hero.alt}
      />
      <Media 
        title={content.media.title} 
        text={content.media.text} 
        position={content.media.position as "right" | "left"}
        buttons={content.media.buttons as [ButtonProps, ...ButtonProps[]]}
        img={content.media.img}
        alt={content.media.alt}
      />
    </>
  );
}
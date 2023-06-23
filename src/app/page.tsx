import Hero from "@/components/common/Hero";
import PageTitle from "@/components/common/PageTitle";
import { ButtonProps } from "@codegouvfr/react-dsfr/Button";

export default function Home() {
  const content = {
    pageTitle: 'Qu’est-ce que le covoiturage courte distance ?',
    hero:{
      title: 'Le covoiturage, qu’est-ce que c’est ?',
      content: `L’article L. 3132-1 du code des transports définit le covoiturage comme « l’utilisation en commun 
      d’un véhicule terrestre à moteur par un conducteur et un ou plusieurs passagers, effectuée à titre non onéreux,
       excepté le partage des frais, dans le cadre d’un déplacement que le conducteur effectue pour son propre compte.
       Leur mise en relation, à cette fin, peut être effectuée à titre onéreux […] ». Il y a donc covoiturage dès le partage
       d’un trajet entre un conducteur et un passager. En conséquence, le covoiturage peut donc être interne à la famille ou 
       extra familial tel que pour des trajets réalisés dans le cadre de sorties de loisirs proches (réunion associative, etc.) 
       ou plus éloignées (balade, cinéma, piscine, salle de sport, etc.).`,
      buttons:[
        {
          children: 'En savoir plus',
          linkProps: {
            href: '#',
          },
        },
      ]
    },
    sections: [
      
    ],
  }

  return (
    <article id='content'>
      <PageTitle title={content.pageTitle} />
      <Hero title={content.hero.title} content={content.hero.content} buttons={content.hero.buttons as [ButtonProps, ...ButtonProps[]]}/>
    </article>
  );
}

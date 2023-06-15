import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import { Footer } from '@codegouvfr/react-dsfr/Footer';

export function AppFooter() {
  return (
    <Footer
      accessibility='partially compliant'
      contentDescription='Le site officiel d’information sur le covoiturage de courte distance.
     Retrouvez toutes les informations et démarches administratives nécessaires au développement du covoiturage sur votre territoire.'
      operatorLogo={{
        alt: 'covoiturage courte distance',
        imgUrl: 'static/media/placeholder.16x9.3d46f94c.png',
        orientation: 'horizontal',
      }}
      partnersLogos={{
        sub: [
          {
            alt: 'CEREMA',
            href: '#',
            imgUrl: 'static/media/placeholder.16x9.3d46f94c.png',
          },
          {
            alt: 'ADEME',
            href: '#',
            imgUrl: 'static/media/placeholder.16x9.3d46f94c.png',
          },
        ],
      }}
      bottomItems={[headerFooterDisplayItem]}
    />
  );
}

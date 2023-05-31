'use client'
import { MainNavigation } from "@codegouvfr/react-dsfr/MainNavigation";
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <MainNavigation 
      items={[
        {
          linkProps: {href: '/', target: '_self'},
          text: 'Accueil',
          isActive: pathname === '/',
        }, 
        {
          menuLinks: [
            {
              linkProps: {
                href: '/observatoire/covoiturage-courte-distance'
              },
              text: 'Le covoiturage courte distance en France',
              isActive: pathname === '/observatoire/covoiturage-courte-distance',
            },
            {
              linkProps: {
                href: '/observatoire/territoire?code=XXXXX&type=com&observe=country&year=2022&month=1'
              },
              text: 'Observer un territoire',
              isActive: pathname.startsWith('/observatoire/territoire'),
            },
            {
              linkProps: {
                href: '/observatoire/recensement-actions'
              },
              text: 'Recensement des actions pour développer le covoiturage',
              isActive: pathname === '/observatoire/recensement-actions',
            },
            {
              linkProps: {
                href: '/observatoire/impact-actions'
              },
              text: 'Impact des actions pour développer le covoiturage',
              isActive: pathname === '/observatoire/impact-actions',
            },
            {
              linkProps: {
                href: '/observatoire/plan-covoiturage'
              },
              text: 'Evaluation du plan national covoiturage',
              isActive: pathname === '/observatoire/plan-covoiturage',
            },
          ],
          text: 'Observatoire',
          isActive: pathname.startsWith('/observatoire'),
        },
        {
          menuLinks: [
          ],
          text: 'Collectivités',
          isActive: pathname.startsWith('/collectivites'),
        },
        {
          menuLinks: [
          ],
          text: 'Vous êtes',
          isActive: pathname.startsWith('/vous-etes'),
        },
        {linkProps: {href: '/actualites', target: '_self'}, text: 'Actualités', isActive: pathname === '/actualites'}, 
        {linkProps: {href: '/documentation', target: '_self'}, text: 'Documentation', isActive: pathname === '/documentation'}
      ]} 
    />
  );
};
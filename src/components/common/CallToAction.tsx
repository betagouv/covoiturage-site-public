import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { fr } from '@codegouvfr/react-dsfr';
import { ButtonProps } from '@codegouvfr/react-dsfr/Button';
import { CSSProperties } from 'react';
import Image from 'next/image';
import { CTAProps } from '@/interfaces/common/componentsInterface';
import { cmsHost } from '@/helpers/cms';

export default function CallToAction(props:CTAProps) {
  return (
    <div id='hero' 
      className={fr.cx('fr-grid-row', 'fr-p-2w', 'fr-p-md-10w')}
      style={props.backgroundColor ? {"backgroundColor": props.backgroundColor} as CSSProperties : undefined}

    >
      <div className={fr.cx('fr-col-12', 'fr-col-md-9')}>
        <p className={fr.cx('fr-h1','fr-mb-2v')}>{props.title}</p>
        {props.subtitle && <p className={fr.cx('fr-h6')}>{props.subtitle}</p>}
        <p className={fr.cx('fr-pr-md-5v')}>{props.content}</p>
        {props.buttons && props.img && 
          <ButtonsGroup
            alignment={'center'}
            buttons={props.buttons.map(b => {
              return {
                children:b.title,
                linkProps: {
                  href: b.url
                },
                iconId: b.icon ? b.icon : '',
                priority: b.color ? b.color : 'primary',
              } 
            }) as [ButtonProps, ...ButtonProps[]]}
            buttonsEquisized
            buttonsIconPosition={'right'}
          />
        }
      </div>
      <div className={fr.cx('fr-col', 'fr-col-md-3','fr-my-auto')}>
        {props.img && props.alt &&
          <figure className={fr.cx('fr-content-media')} role="group">
            <div className={fr.cx('fr-content-media__img')}>
              <Image className={fr.cx('fr-responsive-img')} src={`${cmsHost}/assets/${props.img}`} alt={props.alt} width={1200} height={800} />
            </div>
          </figure>
        }
        {props.buttons && !props.img && !props.alt && 
          <ButtonsGroup
            alignment={'center'}
            buttons={props.buttons.map(b => {
              return {
                children:b.title,
                linkProps: {
                  href: b.url
                },
                iconId: b.icon ? b.icon : '',
                priority: b.color ? b.color : 'primary',
              } 
            }) as [ButtonProps, ...ButtonProps[]]}
          />
        }
      </div>
    </div>
  );
}
import { fr } from "@codegouvfr/react-dsfr";
import ButtonsGroup from "@codegouvfr/react-dsfr/ButtonsGroup";
import { MediaProps }  from "@/interfaces/common/componentsInterface"
import Image from 'next/image';

export default function Media(props: MediaProps) {
  return(
    <div className={fr.cx('fr-grid-row','fr-my-2w')}>
      {
        props.img && props.alt && props.position === 'left' &&
        <div className={fr.cx('fr-col-md-4')}>
          <figure className={fr.cx('fr-content-media','fr-m-0')} role="group">
            <div className={fr.cx('fr-content-media__img')}>
              <Image className={fr.cx('fr-responsive-img')} src={props.img} alt={props.alt} width={1200} height={800} />
            </div>
          </figure>
        </div>
      }
      <div className={!props.img ? fr.cx('fr-col-12') : fr.cx('fr-col-md-8', props.position ==='right' ? 'fr-pr-5w' : 'fr-pl-5w')}>
        <p className={fr.cx('fr-h3','fr-mb-0')}>{props.title}</p>
        <p>{props.text}</p>
        {
          props.buttons && 
          <ButtonsGroup
            alignment={'right'}
            inlineLayoutWhen={'always'}
            buttons={props.buttons}
            buttonsIconPosition={'right'}
          />
        }
      </div>
      {
        props.img && props.alt && props.position === 'right' &&
        <div className={fr.cx('fr-col-md-4')}>
          <figure className={fr.cx('fr-content-media')} role="group">
            <div className={fr.cx('fr-content-media__img')}>
              <Image className={fr.cx('fr-responsive-img')} src={props.img} alt={props.alt} width={1200} height={800} />
            </div>
          </figure>
        </div>
      }
    </div>
  );
}
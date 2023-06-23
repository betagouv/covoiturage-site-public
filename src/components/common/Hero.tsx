import { ButtonsGroup } from '@codegouvfr/react-dsfr/ButtonsGroup';
import { fr } from '@codegouvfr/react-dsfr';
import { ButtonProps } from '@codegouvfr/react-dsfr/Button';

export type HeroProps = {
  title: string;
  content: string;
  buttons?: [ButtonProps, ...ButtonProps[]];
}

export default function hero(props:HeroProps) {
  return (
    <div id='hero' className={fr.cx('fr-grid-row', 'fr-py-5v')}>
      <div className={fr.cx('fr-col', 'fr-col-md-9','fr-pr-2w')}>
        <h2>{props.title}</h2>
        <div>{props.content}</div>
      </div>
      { props.buttons && 
        <div className={fr.cx('fr-col','fr-m-auto')}>
          <ButtonsGroup
            alignment={'center'}
            buttons={props.buttons}
          />
        </div>
      }
    </div>
  );
}


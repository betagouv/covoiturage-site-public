import { fr } from '@codegouvfr/react-dsfr';

export default function Share(props) {
  return (
    <div className={fr.cx('fr-share')}>
      <p className={fr.cx('fr-share__title')}>Partager la page</p>
      <ul className={fr.cx('fr-share__group')}>
        <li>
          <a className={fr.cx('fr-share__link','fr-share__link--facebook')} 
            title="Partager sur Facebook" 
            href={`https://www.facebook.com/sharer.php?u=${props.url}`} 
            target="_blank" 
            rel="noopener" 
            onClick={window.open(props.url,'Partager sur Facebook','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=450'); event.preventDefault();}
          >
            Partager sur Facebook
          </a>
        </li>
        <li>
          <a className={fr.cx('fr-share__link','fr-share__link--twitter')} title="Partager sur Twitter" href="https://twitter.com/intent/tweet?url=[À MODIFIER - url de la page]&text=[À MODIFIER - titre ou texte descriptif de la page]&via=[À MODIFIER - via]&hashtags=[À MODIFIER - hashtags]" target="_blank" rel="noopener" onClick="window.open(this.href,'Partager sur Twitter','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=420'); event.preventDefault();">Partager sur Twitter</a>
        </li>
        <li>
          <a className={fr.cx('fr-share__link','fr-share__link--linkedin')} title="Partager sur LinkedIn" href="https://www.linkedin.com/shareArticle?url=[À MODIFIER - url de la page]&title=[À MODIFIER - titre ou texte descriptif de la page]" target="_blank" rel="noopener" onClick="window.open(this.href,'Partager sur LinkedIn','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=550,height=550'); event.preventDefault();">Partager sur LinkedIn</a>
        </li>
        <li>
          <a className={fr.cx('fr-share__link','fr-share__link--mail')} href="mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]" title="Partager par email" target="_blank">Partager par email</a>
        </li>
        <li>
          <button className={fr.cx('fr-share__link','fr-share__link--copy')} title="Copier dans le presse-papier" onClick="navigator.clipboard.writeText(window.location);alert('Adresse copiée dans le presse papier.');">Copier dans le presse-papier</button>
        </li>
      </ul>
    </div>
  );
}

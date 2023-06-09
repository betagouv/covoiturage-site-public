'use client';
import { fr } from '@codegouvfr/react-dsfr';
import { Notice } from '@codegouvfr/react-dsfr/Notice';
import style from './volume.module.scss';

export default function Volume() {
  const title = `Environ 900 000 trajets covoiturés chaque jour`;
  const notice = `Dernière mise à jours le 05 mars 2023. Période considérée par défaut : l’année 2022 `;

  return (
    <div id='volume-trajets' className={fr.cx('fr-grid-row', 'fr-py-5v')}>
      <div className={fr.cx('fr-col')}>
        <h2>{title}</h2>
        <Notice title={notice} />
        <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters', 'fr-py-5v')}>
          <div className={`fr-col fr-col-md-3 ${style.col}`}>
            <div className={`fr-callout ${style.stat}`}>
              <h3 className={fr.cx('fr-callout__title')}>59%</h3>
              <p className={fr.cx('fr-callout__text')}>des déplacements en voiture sont réalisés à plusieurs</p>
            </div>
          </div>
          <div className={`fr-col fr-col-md-3 ${style.col}`}>
            <div className={`fr-callout ${style.stat}`}>
              <h3 className={fr.cx('fr-callout__title')}>1,43</h3>
              <p className={fr.cx('fr-callout__text')}>personnes par véhicule sur des distances inférieur à 100 km</p>
            </div>
          </div>
          <div className={`fr-col fr-col-md-6 ${style.col}`}>
            <div className={`fr-callout ${style.analyse}`}>
              <h3 className={fr.cx('fr-callout__title')}>Explication</h3>
              <p className={fr.cx('fr-callout__text')}>
                En 2019, 59 % des déplacements en voiture sont effectués à plusieurs. Le covoiturage reste en revanche
                une pratique peu développée puisque seuls 3 % des passagers déclarent avoir covoituré pour leurs
                déplacements en voiture. L’usage individuel du véhicule, désigné par le terme d’« autosolisme » est
                majoritaire pour les déplacements en voiture de moins de 50 km.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { fr } from '@codegouvfr/react-dsfr';
import SingleIndicator from './SingleIndicator';
import Analyse from './Analyse';

type IndicatorsRowProps = {
  indicators: {
    value: string,
    info?: string,
    title: string,
  }[],
  analyse?: {
    title?: string,
    content: string,
  }

}
export default function IndicatorsRow(props: IndicatorsRowProps ) {
  const widthClass = () => {
    const grid = props.analyse ? 6 : 12
    // Calcul du multiple de 2 le plus proche dans la grille
    const round = Math.round(grid/props.indicators.length / 2) * 2;
    return `fr-col-md-${round}`;
  };
  return (
    <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
      { props.indicators.length > 0 && props.indicators.map( (i) => {
        return <SingleIndicator key={i.value} value={i.value} info={i.info} title={i.title} style={widthClass()} />
      }) }
      { props.analyse && <Analyse title={props.analyse.title} content={props.analyse.content} />}
    </div>
  )
}

import style from './Analyse.module.scss';

type AnalyseProps = {
  title?: string,
  content: string
}
export default function SingleIndicator(props: AnalyseProps ) {
  return (
    <div className={`fr-col ${style.col}`}>
      <div className={`fr-callout ${style.analyse}`}>
        {props.title && <h3 className={`fr-callout__title ${style.title}`}>{props.title}</h3>}
        <p className={`fr-callout__text ${style.content}`}>
          {props.content}  
        </p>
      </div>
    </div>
  )
}
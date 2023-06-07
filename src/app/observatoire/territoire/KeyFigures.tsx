import { SearchParamsInterface } from "@/interfaces/observatoire/componentsInterfaces";
import IndicatorsRow from "@/components/observatoire/indicators/IndicatorsRow";
import { fr } from "@codegouvfr/react-dsfr";

export default function KeyFigures(props:{params:SearchParamsInterface}) {
  const ind = [
    {value: '34', info:'test badge', title:' test'},
    {value: '55', info:'test badge', title:' test'}
  ]
  const analyse = {
    title: 'test',
    content: 'test de contenu pour la suite de grefk dzeae dsfdsf sdf dsf s'
  }
  return (
    <IndicatorsRow indicators={ind} analyse={analyse}/>
  )
}
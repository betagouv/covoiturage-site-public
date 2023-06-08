'use client'
import { fr } from "@codegouvfr/react-dsfr";
import dynamic from "next/dynamic";
import { SearchParamsInterface } from "@/interfaces/observatoire/componentsInterfaces";
import PageTitle from "@/components/common/PageTitle";
import SectionTitle from "@/components/common/SectionTitle";
import SelectTerritory from "@/components/observatoire/SelectTerritory";
import SelectPeriod from "@/components/observatoire/SelectPeriod";
import KeyFigures from "./KeyFigures";
import RepartitionDistanceGraph from "./graphs/RepartitionDistanceGraph";
import { mapList, graphList } from '@/helpers/lists';
import SelectInList from "@/components/common/SelectInList";
import OccupationMap from "./maps/OccupationMap";
const FluxMap = dynamic(() => import('./maps/FluxMap'), {
  ssr: false
});
const DensiteMap = dynamic(() => import('./maps/DensiteMap'), {
  ssr: false
});
import TrajetsGraph from "./graphs/TrajetsGraph";
import DistanceGraph from "./graphs/DistanceGraph";
import { useState } from "react";
import { TerritoryListInterface } from "@/interfaces/observatoire/dataInterfaces";
import { getPeriod } from "@/helpers/analyse";


export default function Page({searchParams}: {searchParams:SearchParamsInterface}) {
  const title = 'Observer un territoire';
  const [params, setParams] = useState({
    code: searchParams.code ? searchParams.code : 'XXXXX',
    name: 'France',
    type: searchParams.type ? searchParams.type : 'country',
    observe: searchParams.observe ? searchParams.observe : 'com',
    year: searchParams.year ? searchParams.year : 2022,
    month: searchParams.month ? searchParams.month : 1,
    map: searchParams.map ? searchParams.map : 1,
    graph: searchParams.graph ? searchParams.graph : 1,
  })
  const onChangeTerritory = (value: TerritoryListInterface) => {
    setParams({...params, 
      code: value.territory,
      name: value.l_territory, 
      type: value.type
    })
  }
  const onChangePeriod = (value: {year: number, month: number}) => {
    setParams({...params, year: value.year, month: value.month})
  }
  const onChangeGraph = (value:number) => {
    setParams({...params, graph: value})
  }
  const onChangeMap = (value:number) => {
    setParams({...params, map: value})
  }
   const period = getPeriod(params.year, params.month);
  
  return (
    <article id='content'>
      <PageTitle title={title} />
      <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        <div className={fr.cx('fr-col')}>
          <SelectTerritory code={params.code} type={params.observe} year={params.year} onChange={onChangeTerritory} />
        </div>
        <div className={fr.cx('fr-col')}>
          <SelectPeriod year={params.year} month={params.month} onChange={onChangePeriod} />
        </div>
      </div>
      <SectionTitle title={`${params.name} du ${new Date(period.start_date).toLocaleDateString()} au ${new Date(period.end_date).toLocaleDateString()}`} />
      <KeyFigures params={params}/>
      <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        <div className={fr.cx('fr-col')}>
          <RepartitionDistanceGraph title='Trajets sortants par distance' direction='from' params={params}/>
        </div>
        <div className={fr.cx('fr-col')}>
          <RepartitionDistanceGraph title='Trajets entrants par distance' direction='to' params={params}/>
        </div>
      </div>
      
      <SectionTitle title="Cartographie" />
      <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        <div className={fr.cx('fr-col')}>
          <SelectInList label='Sélectionner une carte' id={params.map} list={mapList} sx={{  minWidth: 300 }} onChange={onChangeMap} />
        </div>
      </div>
      <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        <div className={fr.cx('fr-col')}>
          {params.map == 1 && <FluxMap title={mapList[0].name} params={params}/>}
          {params.map == 2 && <DensiteMap title={mapList[1].name} params={params}/>}
          {params.map == 3 && <OccupationMap title={mapList[2].name} params={params}/>}
        </div>
      </div>
      <SectionTitle title="Evolution" />
      <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        <div className={fr.cx('fr-col')}>
          <SelectInList label='Sélectionner un graphique' id={params.graph} list={graphList} sx={{  minWidth: 300 }} onChange={onChangeGraph}  />
        </div>
      </div>
      <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        {params.graph == 1 && 
          <div className={fr.cx('fr-col')}>
            <TrajetsGraph title={graphList[0].name} params={params}/>
          </div>
        }
        {params.graph == 2 && 
          <div className={fr.cx('fr-col')}>
            <DistanceGraph title={graphList[1].name} params={params}/>
          </div>
        }
      </div>
    </article>
  )
}

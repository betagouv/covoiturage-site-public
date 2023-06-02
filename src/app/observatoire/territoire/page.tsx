'use client'
import { fr } from "@codegouvfr/react-dsfr";
import dynamic from "next/dynamic";
import { SearchParamsInterface } from "@/interfaces/observatoire/componentsInterfaces";
import PageTitle from "@/components/common/PageTitle";
import SelectTerritory from "./SelectTerritory";
import OccupationMap from "./OccupationMap";
const FluxMap = dynamic(() => import('./FluxMap'), {
  ssr: false
});
const DensiteMap = dynamic(() => import('./DensiteMap'), {
  ssr: false
});
import TrajetsGraph from "./TrajetsGraph";
import DistanceGraph from "./DistanceGraph";


export default async function Page({searchParams}: {searchParams:SearchParamsInterface}) {
  const title = 'Observer un territoire';
  const trajetsGraphTitle = 'Nombre de trajets';
  const distanceGraphTitle = 'Distance moyenne des trajets';
  const fluxMapTitle = 'Flux de trajets';
  const densiteMapTitle = 'Densité de départs et arrivées dans une zone';
  const occupationMapTitle = `Taux d'occupation des véhicules partagés et volume de ces véhicules`;
  return (
    <article id='content'>
      <PageTitle title={title} />
      <SelectTerritory params={searchParams}/>
      <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        <div className={fr.cx('fr-col')}>
          <TrajetsGraph title={trajetsGraphTitle} params={searchParams}/>
        </div>
        <div className={fr.cx('fr-col')}>
          <DistanceGraph title={distanceGraphTitle} params={searchParams}/>
        </div>
      </div>
      <FluxMap title={fluxMapTitle} params={searchParams}/>
      <DensiteMap title={densiteMapTitle} params={searchParams}/>
      <OccupationMap title={occupationMapTitle} params={searchParams}/>

    </article>
  )
}

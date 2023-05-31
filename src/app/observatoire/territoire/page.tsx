'use client'
import dynamic from "next/dynamic";
import PageTitle from "@/components/common/PageTitle";
import { SearchParamsInterface } from "@/interfaces/observatoire/componentsInterfaces";
import OccupationMap from "./OccupationMap";
const FluxMap = dynamic(() => import('./FluxMap'), {
  ssr: false
});
const DensiteMap = dynamic(() => import('./DensiteMap'), {
  ssr: false
});

export default async function Page({searchParams}: {searchParams:SearchParamsInterface}) {
  const title = 'Observer un territoire';
  const fluxMapTitle = 'Flux de trajets';
  const densiteMapTitle = 'Densité de départs et arrivées dans une zone';
  const occupationMapTitle = `Taux d'occupation des véhicules partagés et volume de ces véhicules`;
  return (
    <article id='content'>
      <PageTitle title={title} />
      <FluxMap title={fluxMapTitle} params={searchParams}/>
      <DensiteMap title={densiteMapTitle} params={searchParams}/>
      <OccupationMap title={occupationMapTitle} params={searchParams}/>
    </article>
  )
}

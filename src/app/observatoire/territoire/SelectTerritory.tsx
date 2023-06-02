'use client'
import { fr } from '@codegouvfr/react-dsfr';
import { SearchParamsInterface } from "@/interfaces/observatoire/componentsInterfaces";
import { useApi } from '@/hooks/useApi';
import { Select } from "@codegouvfr/react-dsfr/Select";
import { yearList, monthList } from '@/helpers/lists';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { TerritoryListInterface } from '@/interfaces/observatoire/dataInterfaces';

export default function SelectTerritory({params}:{params:SearchParamsInterface}) {
  const router = useRouter();
  const territoryUrl = `${process.env.NEXT_PUBLIC_API_URL}/territories?year=${params.year}`;
  const { data, error, loading} = useApi<TerritoryListInterface[]>(territoryUrl);
  const [ territory, setTerritory ] = useState<string[]>([params.code, '', params.observe]);
  const [ year, setYear ] = useState<number>(params.year);
  const [ month, setMonth ] = useState<number>(params.month);

  useEffect(() => {
     router.push(`/observatoire/territoire?code=${territory[0]}&type=${params.type}&observe=${territory[1]}&year=${year}&month=${month}`)
  }, [router, params, territory, year, month]);

  return (
    <div className={fr.cx('fr-grid-row','fr-grid-row--gutters')}>
        <div className={fr.cx('fr-col')}>
        <Select
          label="Territoire"
          nativeSelectProps={{
            value: territory,
            onChange: event => setTerritory(event.target.value as unknown as string[]),
          }}
        >
          <option value="" disabled hidden>Selectionnez un territoire</option>
          { data?.map( d => <option key={d.territory} value={[d.territory,d.l_territory,d.type]}>{d.l_territory} ({d.type})</option>) }
        </Select>
      </div>
        <div className={fr.cx('fr-col')}>
        <Select
          label="Année"
          nativeSelectProps={{
            value: year,
            onChange: event => setYear(event.target.value as unknown as number),
          }}
        >
          <option value="" disabled hidden>Selectionnez une année</option>
          { yearList.map( d => <option key={d} value={d}>{d}</option>) }
        </Select>
      </div>
      <div className={fr.cx('fr-col')}>
      <Select
        label="Mois"
        nativeSelectProps={{
          value: month,
          onChange: event => setMonth(event.target.value as unknown as number),
        }}
      >
        <option value="" disabled hidden>Selectionnez un mois</option>
        { monthList.map( d => <option key={d.id} value={d.id}>{d.name}</option>) }
      </Select>
      </div>
    </div>

  );
}
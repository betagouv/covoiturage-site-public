import { useApi } from '@/hooks/useApi';
import { TerritoryListInterface } from '@/interfaces/observatoire/dataInterfaces';
import { TextField, Autocomplete, createFilterOptions } from '@mui/material';

type SelectTerritoryProps = {
  code:string, 
  type: string, 
  year: number,
  onChange: (v:TerritoryListInterface) => void,
}

export default function SelectTerritory(props:SelectTerritoryProps) {
  const territoryUrl = `${process.env.NEXT_PUBLIC_API_URL}/territories?year=${props.year}`;
  const { data, error, loading } = useApi<TerritoryListInterface[]>(territoryUrl);

  return (
    <>
      {data && <Autocomplete
        disablePortal
        id="select-territory"
        options={data}
        defaultValue={data.find(o => o.territory === props.code)}
        getOptionLabel={(option) => `${option.l_territory} (${option.type})`}
        renderInput={(params) => <TextField {...params} label="Territoire" />}
        onChange={(e,v) => props.onChange(v!)}
        filterOptions={createFilterOptions({
          matchFrom: 'any',
          limit: 100,
          ignoreCase: true,
          stringify: option => option.l_territory,
        })}
      />}
    </>
  );
}
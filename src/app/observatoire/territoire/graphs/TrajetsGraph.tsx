'use client'
import { fr } from '@codegouvfr/react-dsfr';
import { monthList } from '@/helpers/lists';
import { useApi } from '@/hooks/useApi';
import { SearchParamsInterface } from '@/interfaces/observatoire/componentsInterfaces';
import { EvolJourneysDataInterface } from '@/interfaces/observatoire/dataInterfaces';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function TrajetsGraph({title, params}:{title:string, params:SearchParamsInterface}) {
  const options = {
    responsive: true,
  };
  const url = `${process.env.NEXT_PUBLIC_API_URL}/evol_monthly_flux?indic=journeys&code=${params.code}&type=${params.type}&year=${params.year}&month=${params.month}`;
  const { data, error, loading} = useApi<EvolJourneysDataInterface[]>(url);
  
  const chartData = () => {
    const labels = data?.map((d) =>{ 
      const month = monthList.find(m => m.id == d.month)
      return month!.name + ' '+ d.year
    });
    const datasets = [{
      label:'Nombre de trajets réalisés',
      data:data?.map(d => d.journeys).reverse(),
      fill:true,
      borderColor:'#000091',
      backgroundColor:'rgba(0, 0, 145, 0.2)',
      tension: 0.1,
    }];
    return { labels:labels!.reverse(), datasets:datasets }
  };

  return (
    <>
      {
        loading && 
        <div className={fr.cx('fr-callout')}>
          <h3 className={fr.cx('fr-callout__title')}>{ title }</h3>
          <div>Chargement en cours...</div>
        </div>
      }
      { 
        error && 
        <div className={fr.cx('fr-callout')}>
          <h3 className={fr.cx('fr-callout__title')}>{ title }</h3>
          <div>{`Un problème est survenu au chargement des données: ${error}`}</div>
        </div>
      }
      {
        !loading && !error &&
        <div className={fr.cx('fr-callout')}>
          <h3 className={fr.cx('fr-callout__title')}>{ title }</h3>
          <div className='graph-wrapper' style={{backgroundColor:'#fff'}}>
            <Line options={options} data={chartData()} />
          </div>
        </div>
      }
    </>
  )
}
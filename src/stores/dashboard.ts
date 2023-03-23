import { map, onMount, task } from 'nanostores'
import axios from 'axios'

export const period = map({
  year: '',
  month:'',
})

export const periodList= map({
  year:[2023, 2022, 2021, 2020],
  month:[
    {id:1,name:'Janvier'},
    {id:2,name:'Février'},
    {id:3,name:'Mars'},
    {id:4,name:'Avril'},
    {id:5,name:'Mai'},
    {id:6,name:'Juin'},
    {id:7,name:'Juillet'},
    {id:8,name:'Août'},
    {id:9,name:'Septembre'},
    {id:10,name:'Octobre'},
    {id:11,name:'Novembre'},
    {id:12,name:'Décembre'}
  ],
})

export async function loadPeriod() {
  const response = await axios.get('/monthly_flux/last')
  if(response.data){
    period.set(response.data.result.data)
  }
}

onMount(period, () => {
  task(async () => {
    await loadPeriod()
  })
})

export const territory= map({
  territory:'XXXXX',
  l_territory:'France',
  type:'country',
})
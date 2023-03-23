import { atom, map, computed, onMount, task } from 'nanostores'
import type { territoryInterface } from '@/interfaces/dashboardInterfaces'
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
    await loadTerritories()
  })
})

export const territory= map({
  territory:'XXXXX',
  l_territory:'France',
  type:'country',
})

export const territorySearch = atom('')

export const territoryList= map<territoryInterface[]>([])

export async function loadTerritories() {
  const response = await axios.get(`/territories?year=${period.get().year}`)
  if(response.data){
    territoryList.set(response.data.result.data)
  }
}

export const filteredTerritories = computed([territorySearch,territoryList], (search,territories) => {
  return territories.filter((option) => {
    return (option.l_territory.toLowerCase().indexOf(search.toLowerCase()) >= 0 
    || option.territory.indexOf(search.toLowerCase()) >= 0)
  }).slice(0,100)
})

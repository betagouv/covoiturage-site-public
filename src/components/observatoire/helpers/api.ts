import { ref } from 'vue'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { useNotification } from './notifications'

export async function useApi<T>(config:AxiosRequestConfig){
  const loading = ref(false)
  const data = ref<T>()
  const error = ref<AxiosError>()
  const fetch = async () => { 
    try{
      loading.value = true
      const response = await axios.request(config)
      if(response.status === 204){
        useNotification({
          message: response.data.message,
          position: 'top',
          variant: 'info',
          duration:10000
        })
      }
      if(response.status === 200){
        data.value = response.data.result.data
      }
    
    } catch (err){
      if(axios.isAxiosError(err)){
        error.value = err
        useNotification({
          message: err.response?.data.error.data,
          position: 'top',
          variant: 'danger',
          duration:10000,
        })
      }
    } finally {
      loading.value = false
    }
  }
  await fetch()
  return { loading, data, error, fetch }
}


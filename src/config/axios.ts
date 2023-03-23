import axios from 'axios'

const axiosConfig = async () => {
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  axios.defaults.baseURL = `${import.meta.env.PUBLIC_API_URL || 'http://localhost'}`
}

export default axiosConfig

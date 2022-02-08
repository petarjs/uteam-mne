import axios from 'axios'

const apiURL = process.env.REACT_APP_API_URL

const API = axios.create({
   baseURL: apiURL,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   },
})

API.interceptors.request.use((config) => {
   return JSON.parse(localStorage.getItem('auth'))
      ? (config.headers['Authorization'] = `Bearer ${JSON.parse(
           localStorage.getItem('auth')
        )}`)
      : config
})

export default API

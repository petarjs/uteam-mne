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
   const token = JSON.parse(localStorage.getItem('user')).jwt
   if (token) config.headers.Authorization = token
   return config
})

export default API

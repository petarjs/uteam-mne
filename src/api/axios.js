import axios from 'axios'

const apiURL = process.env.REACT_APP_API_URL
export default axios.create({
   baseURL: apiURL,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   },
})

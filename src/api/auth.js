import axios from './axios'

export const loginUser = async (data) => {
   let response = {}
   await axios
      .post('/auth/local', {
         ...data,
      })
      .then((res) => {
         response = {
            ok: true,
            jwt: res.data.jwt,
            user: res.data.user,
         }
      })
      .catch((e) => {
         response = { ok: false, error: e.response.data.error.message }
      })
   return response
}

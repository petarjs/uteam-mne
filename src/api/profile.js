import API from './axios'

export const getProfileData = async (userId) => {
   let response = {}
   await API.get(`/profiles?filters[user][id][$eq]=${userId}&populate=*`)
      .then((res) => {
         response = {
            ok: true,
            id: res.data.data[0].id,
            name: res.data.data[0].attributes.name,
         }
      })
      .catch((e) => {
         response = { ok: false, error: e.response.data.error.message }
      })
   return response
}

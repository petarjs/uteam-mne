import API from './axios'

export const getProfileData = async (userId) => {
   try {
      const params = new URLSearchParams([
         ['filters[user][id][$eq]', userId],
         ['populate', '*'],
      ])
      const response = await API.get(`/profiles`, { params })
      const id = response.data.data[0].id
      const name = response.data.data[0].attributes.name
      return { id, name }
   } catch (ex) {
      throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
   }
}

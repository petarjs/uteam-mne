import API from './axios'

export const getProfileData = async (userId) => {
   try {
      const response = await API.get(
         `/profiles?filters[user][id][$eq]=${userId}&populate=*`
      )
      const id = response.data.data[0].id
      const name = response.data.data[0].attributes.name
      return { id, name }
   } catch (ex) {
      throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
   }
}

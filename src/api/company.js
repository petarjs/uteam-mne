import API from './axios'

export const createCompany = async (data) => {
  try {
    const response = await API.post('/companies', { data })
    const { id } = response.data.data
    return id
  } catch (ex) {
    throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
  }
}

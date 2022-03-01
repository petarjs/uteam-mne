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

export const updateCompany = async (data, companyId) => {
  try {
    const response = await API.put(`/companies/${companyId}`, { data })
    const { id } = response.data.data
    return id
  } catch (ex) {
    throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
  }
}

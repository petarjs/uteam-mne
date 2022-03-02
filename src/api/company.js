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

export const getCompanyQuestions = async (companyId) => {
  try {
    const params = new URLSearchParams([
      ['filters[company][id][$eq]', companyId],
      ['populate', '*'],
      ['sort', 'order']
    ])
    const response = await API.get('/questions', { params })
    return response.data.data
  } catch (ex) {
    throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
  }
}

export const addCompanyQuestion = async (data) => {
  try {
    const response = await API.post('/questions', { data })
    return response
  } catch (ex) {
    throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
  }
}

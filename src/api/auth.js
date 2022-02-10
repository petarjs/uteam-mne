import API from './axios'

export const loginUser = async (data) => {
  try {
    const response = await API.post('/auth/local', data)
    const { jwt, user } = response.data
    return { jwt, user }
  } catch (ex) {
    throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
  }
}

import API from './axios'

export const getProfileData = async (userId) => {
  try {
    const params = new URLSearchParams([
      ['filters[user][id][$eq]', userId],
      ['populate', '*']
    ])
    const response = await API.get(`/profiles`, { params })
    const id = response.data.data[0].id
    const name = response.data.data[0].attributes.name
    return { id, name }
  } catch (ex) {
    throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
  }
}

export const createProfile = async (data) => {
  try {
    const response = await API.post('/profiles', { data })
    const { id } = response.data.data
    return id
  } catch (ex) {
    throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
  }
}

export const uploadProfileImage = async (img) => {
  try {
    const fd = new FormData()
    fd.append('files', img)
    const response = await API.post('/upload', fd)
    const imageId = response.data[0].id
    return imageId
  } catch (ex) {
    throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
  }
}

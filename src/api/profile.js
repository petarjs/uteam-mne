import API from './axios'

export const getProfileData = async (userId) => {
  try {
    const params = new URLSearchParams([
      ['filters[user][id][$eq]', userId],
      ['populate', '*']
    ])
    const response = await API.get(`/profiles`, { params })
    return response.data.data[0]
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

export const updateProfile = async (id, data) => {
  try {
    const response = await API.put(`/profiles/${id}`, { data })
    return response
  } catch (ex) {
    throw Error(ex?.response?.data?.error?.message ?? 'Unknown error')
  }
}

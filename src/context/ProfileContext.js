import React, { useState, useCallback } from 'react'
import { getProfileData } from '../api/profile'

const ProfileContext = React.createContext(undefined)

export const ProfileContextProvider = (props) => {
  const [profile, setProfile] = useState(null)

  const setUserProfile = useCallback(async (id) => {
    try {
      const userProfileData = await getProfileData(id)
      setProfile(userProfileData)
    } catch (e) {
      setProfile(null)
    }
  }, [])

  return (
    <ProfileContext.Provider value={{ userProfile: profile, setUserProfile }}>
      {props.children}
    </ProfileContext.Provider>
  )
}

export default ProfileContext

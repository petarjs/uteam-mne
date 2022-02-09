import React, { useState, useCallback } from 'react'

const ProfileContext = React.createContext(undefined)

export const ProfileContextProvider = (props) => {
   const [profile, setProfile] = useState(null)

   const setUserProfile = useCallback((profile) => {
      setProfile(profile)
   }, [])

   return (
      <ProfileContext.Provider value={{ userProfile: profile, setUserProfile }}>
         {props.children}
      </ProfileContext.Provider>
   )
}

export default ProfileContext

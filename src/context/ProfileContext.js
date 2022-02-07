import React, { useState, useEffect } from 'react'

const ProfileContext = React.createContext({
   userProfile: null,
   setUserProfile: () => {},
   unsetUserProfile: () => {},
})

export const ProfileContextProvider = (props) => {
   const [profile, setProfile] = useState(null)

   const setUserProfile = (profile) => {
      setProfile(profile)
   }

   const unsetUserProfile = () => {
      setProfile(null)
   }

   useEffect(() => {
      try {
         const existingProfile = JSON.parse(localStorage.getItem('profile'))
         if (existingProfile) {
            setProfile(existingProfile)
         }
      } catch (e) {
         console.log(e)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('profile', JSON.stringify(profile))
   }, [profile])

   return (
      <ProfileContext.Provider
         value={{ userProfile: profile, setUserProfile, unsetUserProfile }}
      >
         {props.children}
      </ProfileContext.Provider>
   )
}

export default ProfileContext

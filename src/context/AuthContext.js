import React, { useState, useEffect } from 'react'
import { useProfileContext } from '../hooks/profile-context'
import { getProfileData } from '../api/profile'

const AuthContext = React.createContext(undefined)

export const AuthContextProvider = (props) => {
   const [user, setUser] = useState({})
   const { setUserProfile } = useProfileContext()

   const isLoggedIn = !!user.jwt

   const loginHandler = ({ jwt, user }) => {
      setUser({
         jwt,
         id: user.id,
      })
   }

   const logoutHandler = () => {
      setUser({
         jwt: null,
         id: null,
      })
   }

   useEffect(() => {
      try {
         const existingUser = JSON.parse(localStorage.getItem('user'))
         if (existingUser) {
            setUser(existingUser)
         }
      } catch (e) {
         console.log(e)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user))

      async function fetchProfile() {
         try {
            const userProfileData = await getProfileData(user.id)
            setUserProfile(userProfileData)
         } catch (e) {
            setUserProfile(null)
         }
      }
      fetchProfile()
   }, [user, setUserProfile])

   return (
      <AuthContext.Provider
         value={{
            user,
            isLoggedIn,
            login: loginHandler,
            logout: logoutHandler,
         }}
      >
         {props.children}
      </AuthContext.Provider>
   )
}

export default AuthContext

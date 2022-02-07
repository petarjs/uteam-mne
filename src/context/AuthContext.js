import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
   jwt: '',
   isLoggedIn: false,
   login: (token) => {},
   logout: () => {},
})

export const AuthContextProvider = (props) => {
   const [jwt, setJwt] = useState(null)

   const isLoggedIn = !!jwt

   const loginHandler = (token) => {
      setJwt(token)
   }

   const logoutHandler = () => {
      setJwt(null)
      localStorage.removeItem('auth')
   }

   useEffect(() => {
      try {
         const existingJwt = JSON.parse(localStorage.getItem('auth'))
         if (existingJwt) {
            setJwt(existingJwt)
         }
      } catch (e) {
         console.log(e)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('auth', JSON.stringify(jwt))
   }, [jwt])

   return (
      <AuthContext.Provider
         value={{ jwt, isLoggedIn, login: loginHandler, logout: logoutHandler }}
      >
         {props.children}
      </AuthContext.Provider>
   )
}

export default AuthContext

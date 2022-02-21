import React, { useState, useEffect } from 'react'
import { useProfileContext } from '../hooks/profile-context'
import { getCurrentUser } from '../api/auth'

const AuthContext = React.createContext(undefined)

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState('')
  const { setUserProfile } = useProfileContext()

  const isLoggedIn = !!token

  const loginHandler = async (jwt) => {
    setToken(jwt)
  }

  const logoutHandler = () => {
    setToken('')
  }

  const checkToken = () => {
    const localStorageToken = localStorage.getItem('token')
    if (token !== localStorageToken) {
      setToken('')
    }
  }

  useEffect(() => {
    try {
      const existingToken = localStorage.getItem('token')
      if (existingToken) {
        setToken(existingToken)
      }
    } catch {
      console.log()
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('token', token)
    if (token) {
      ;(async () => {
        const { id } = await getCurrentUser()
        setUserProfile(id)
      })()
    }
  }, [token, setUserProfile])

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        checkToken
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext

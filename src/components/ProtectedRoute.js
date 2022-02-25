import React from 'react'
import { useAuthContext } from '../hooks/auth-context'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { token } = useAuthContext()
  if (token === null) {
    return 'Loading'
  }
  return token ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute

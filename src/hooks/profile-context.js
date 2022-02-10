import { useContext } from 'react'
import ProfileContext from '../context/ProfileContext'

export const useProfileContext = () => {
  const ctx = useContext(ProfileContext)
  return ctx
}

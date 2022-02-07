import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import ProfileContext from '../context/ProfileContext'

export const useMultipleContexts = () => {
   const authCtx = useContext(AuthContext)
   const profileCtx = useContext(ProfileContext)
   return { ...authCtx, ...profileCtx }
}

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/theme'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { ProfileContextProvider } from './context/ProfileContext'

ReactDOM.render(
   <React.StrictMode>
      <AuthContextProvider>
         <ProfileContextProvider>
            <ChakraProvider theme={theme}>
               <BrowserRouter>
                  <App />
               </BrowserRouter>
            </ChakraProvider>
         </ProfileContextProvider>
      </AuthContextProvider>
   </React.StrictMode>,
   document.getElementById('root')
)

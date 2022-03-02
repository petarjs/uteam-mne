import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme/theme'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { ProfileContextProvider } from './context/ProfileContext'
import Interceptors from './api/Interceptors'

ReactDOM.render(
  <React.StrictMode>
    <ProfileContextProvider>
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Interceptors />
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </AuthContextProvider>
    </ProfileContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

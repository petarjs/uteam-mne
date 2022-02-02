import './App.css'
import { Flex, Button, useColorMode } from '@chakra-ui/react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
   LoginPage,
   JoinPage,
   CompanyPage,
   QuestionsPage,
   TeamPage,
   ProfilePage,
} from './imports'

function App() {
   const { toggleColorMode } = useColorMode()
   return (
      <Flex
         height='100vh'
         alignItems='center'
         justifyContent='center'
         flexDirection='column'
      >
         <Button onClick={toggleColorMode} variant='primary'>
            Toggle Color Mode
         </Button>

         <Routes>
            <Route path='' element={<Navigate to='login' />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='join' element={<JoinPage />} />
            <Route path='company' element={<CompanyPage />} />
            <Route path='questions' element={<QuestionsPage />} />
            <Route path='team' element={<TeamPage />} />
            <Route path='profile' element={<ProfilePage />} />
         </Routes>
      </Flex>
   )
}

export default App

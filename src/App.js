import './App.css'
import { useState } from 'react'
import { useMediaQuery, Flex, Button, Box } from '@chakra-ui/react'
import { Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import JoinPage from './pages/JoinPage'
import CompanyPage from './pages/CompanyPage'
import QuestionsPage from './pages/QuestionsPage'
import TeamPage from './pages/TeamPage'
import ProfilePage from './pages/ProfilePage'
import Header from './components/Header'
import DesktopSidebar from './components/DesktopSidebar'

function App() {
   const [isLargerThan768] = useMediaQuery('(min-width:768px)')
   const [guest, setQuest] = useState(false)

   return (
      <Box position='relative' minH='100vh'>
         <Header />
         <Flex>
            {isLargerThan768 && !guest && <DesktopSidebar />}
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
         <Button
            position='absolute'
            bottom='0'
            right='0'
            onClick={() => {
               setQuest((prevState) => !prevState)
            }}
         >
            Guest
         </Button>
      </Box>
   )
}

export default App

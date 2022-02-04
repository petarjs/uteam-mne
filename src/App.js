import { useMediaQuery, Flex, Box } from '@chakra-ui/react'
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
   // console.log(process.env.REACT_APP_API_URL)

   return (
      <Box position='relative' minH='100vh'>
         <Header />
         <Flex>
            {isLargerThan768 && <DesktopSidebar />}
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
      </Box>
   )
}

export default App

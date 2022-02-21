import React, { useEffect } from 'react'
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
import { useAuthContext } from './hooks/auth-context'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'

function App() {
  const [isLargerThan768] = useMediaQuery('(min-width:768px)')

  const { isLoggedIn, checkToken } = useAuthContext()
  useEffect(() => {
    window.onstorage = () => {
      checkToken()
    }
  }, [])

  return (
    <Box position="relative" minH="100vh" padding="1rem" margin="auto" maxW="1240px">
      <Header />
      <Flex gap="0.8rem">
        {isLargerThan768 && isLoggedIn && <DesktopSidebar />}
        <Routes>
          <Route path="" element={<Navigate to="login" />} />
          {!isLoggedIn && (
            <>
              <Route path="login" element={<LoginPage />} />
              <Route path="join" element={<JoinPage />} />
            </>
          )}
          <Route
            path="company"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <CompanyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="questions"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <QuestionsPage />
              </ProtectedRoute>
            }
          />
          <Route path="team/*" element={<TeamPage />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
    </Box>
  )
}

export default App

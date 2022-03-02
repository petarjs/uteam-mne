import React from 'react'
import { Grid, Box, GridItem } from '@chakra-ui/react'
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
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const { isLoggedIn } = useAuthContext()

  return (
    <Box position="relative" minH="100vh" padding="0.45rem" margin="auto" maxW="1280px">
      <Header />
      <Grid gap="0.45rem" templateColumns={{ base: '1fr', md: '16rem 1fr' }}>
        {isLoggedIn && <DesktopSidebar display={{ base: 'none', md: 'flex' }} />}
        <Routes>
          <Route path="" element={<Navigate to="login" />} />
          {!isLoggedIn && (
            <>
              <Route
                path="login"
                element={
                  <GridItem colSpan={2}>
                    <LoginPage />
                  </GridItem>
                }
              />
              <Route
                path="join"
                element={
                  <GridItem colSpan={2}>
                    <JoinPage />
                  </GridItem>
                }
              />
            </>
          )}

          <Route
            path="company"
            element={
              <ProtectedRoute>
                <CompanyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="questions/*"
            element={
              <ProtectedRoute>
                <QuestionsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route path="team/*" element={<TeamPage />} />
          <Route
            path="*"
            element={
              isLoggedIn ? (
                <NotFound />
              ) : (
                <GridItem colSpan={2}>
                  <NotFound />
                </GridItem>
              )
            }
          />
        </Routes>
      </Grid>
    </Box>
  )
}

export default App

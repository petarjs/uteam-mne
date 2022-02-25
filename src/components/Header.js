import React from 'react'
import { Flex, Link, Heading } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import Drawer from './Drawer'
import ProfileMenu from './ProfileMenu'
import { useAuthContext } from '../hooks/auth-context'
import { useProfileContext } from '../hooks/profile-context'

const Header = () => {
  const { isLoggedIn, logout } = useAuthContext()
  const { userProfile } = useProfileContext()

  const logoutHandler = () => {
    logout()
  }

  return (
    <Flex
      height="3rem"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      p="1rem"
      bgColor="#2f3437"
      backdropFilter="blur(10px)"
      mb="0.45rem"
      borderRadius="0.4rem"
      boxShadow="md">
      <Drawer title="Menu" display={{ base: 'block', md: 'none' }}>
        <Link as={ReactLink} to="team" mr="1rem">
          Pending for approval
        </Link>
        <Link as={ReactLink} to="team" mr="1rem">
          Team
        </Link>
        <Link as={ReactLink} to="questions" mr="1rem">
          Questions
        </Link>
        <Link as={ReactLink} to="company" mr="1rem">
          Company Info
        </Link>
        <Link as={ReactLink} to="profile" mr="1rem">
          My Profile
        </Link>
      </Drawer>

      <ReactLink to="/team">
        <Heading as="h1" size="md">
          uTeam
        </Heading>
      </ReactLink>

      <Flex alignItems="center" justifyContent="space-between" fontWeight="semibold">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          display={{ base: 'none', md: 'flex' }}>
          {isLoggedIn ? (
            <Link as={ReactLink} to="/profile">
              {userProfile?.attributes?.name}
            </Link>
          ) : (
            <Link as={ReactLink} to="/login">
              Login
            </Link>
          )}
          {isLoggedIn ? (
            <Link px="1rem" as={ReactLink} to="/login" onClick={logoutHandler}>
              Logout
            </Link>
          ) : (
            <Link px="1rem" as={ReactLink} to="/join">
              Register
            </Link>
          )}
        </Flex>
        <ProfileMenu display={{ base: 'block', md: 'none' }} />
      </Flex>
    </Flex>
  )
}

export default Header

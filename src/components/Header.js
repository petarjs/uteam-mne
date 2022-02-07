import React from 'react'
import { Flex, useMediaQuery, Link, Heading } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import Drawer from './Drawer'
import ProfileMenu from './ProfileMenu'
import { useMultipleContexts } from '../hooks/multiple-context'

const Header = () => {
   const [isLargerThan768] = useMediaQuery('(min-width:768px)')

   const { isLoggedIn, logout, userProfile, unsetUserProfile } =
      useMultipleContexts()

   const logoutHandler = () => {
      logout()
      unsetUserProfile()
   }

   return (
      <Flex
         height='3rem'
         alignItems='center'
         justifyContent='space-between'
         width='100%'
         p='1rem'
         bgColor='#2f3437'
         backdropFilter='blur(10px)'
         mb='0.8rem'
         borderRadius='0.5rem'
         boxShadow='md'
      >
         {!isLargerThan768 && (
            <Drawer title='Menu'>
               <Link as={ReactLink} to='team' mr='1rem'>
                  Pending for approval
               </Link>
               <Link as={ReactLink} to='team' mr='1rem'>
                  Team
               </Link>
               <Link as={ReactLink} to='questions' mr='1rem'>
                  Questions
               </Link>
               <Link as={ReactLink} to='company' mr='1rem'>
                  Company Info
               </Link>
               <Link as={ReactLink} to='profile' mr='1rem'>
                  My Profile
               </Link>
            </Drawer>
         )}
         <ReactLink to='/'>
            <Heading as='h1' size='md'>
               uTeam
            </Heading>
         </ReactLink>

         <Flex
            alignItems='center'
            justifyContent='space-between'
            fontWeight='semibold'
         >
            {isLargerThan768 ? (
               <Flex alignItems='center' justifyContent='space-between'>
                  <Link as={ReactLink} to={isLoggedIn ? '/profile' : '/login'}>
                     {isLoggedIn && userProfile
                        ? `${userProfile.username}`
                        : 'Login'}
                  </Link>
                  <Link
                     px='1rem'
                     as={ReactLink}
                     to={isLoggedIn ? '/login' : '/join'}
                  >
                     {isLoggedIn ? (
                        <span onClick={logoutHandler}>Logout</span>
                     ) : (
                        'Register'
                     )}
                  </Link>
               </Flex>
            ) : (
               <ProfileMenu />
            )}
         </Flex>
      </Flex>
   )
}

export default Header

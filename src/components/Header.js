import React from 'react'
import { Flex, useMediaQuery, Link, Heading } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import Drawer from './Drawer'
import ProfileMenu from './ProfileMenu'
import { useAuthContext } from '../hooks/auth-context'
import { useProfileContext } from '../hooks/profile-context'

const Header = () => {
   const [isLargerThan768] = useMediaQuery('(min-width:768px)')

   const { isLoggedIn, logout } = useAuthContext()
   const { userProfile } = useProfileContext()

   const logoutHandler = () => {
      logout()
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
                  {isLoggedIn ? (
                     <Link as={ReactLink} to='/profile'>
                        {userProfile?.name}
                     </Link>
                  ) : (
                     <Link as={ReactLink} to='/login'>
                        Login
                     </Link>
                  )}
                  {isLoggedIn ? (
                     <Link
                        px='1rem'
                        as={ReactLink}
                        to='/login'
                        onClick={logoutHandler}
                     >
                        Logout
                     </Link>
                  ) : (
                     <Link px='1rem' as={ReactLink} to='/join'>
                        Register
                     </Link>
                  )}
               </Flex>
            ) : (
               <ProfileMenu />
            )}
         </Flex>
      </Flex>
   )
}

export default Header

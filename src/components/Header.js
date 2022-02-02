import React from 'react'
import { Flex, Box, useMediaQuery, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import Drawer from './Drawer'
import ProfileMenu from './ProfileMenu'

const Header = () => {
   const [isLargerThan768] = useMediaQuery('(min-width:768px)')
   return (
      <Flex
         height='3rem'
         alignItems='center'
         justifyContent='space-between'
         width='100%'
         p='1rem'
         bgColor='gray.100'
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
         <Box>Logo</Box>

         <Flex alignItems='center' justifyContent='space-between'>
            {isLargerThan768 ? (
               <Flex alignItems='center' justifyContent='space-between'>
                  <Link as={ReactLink} to='login' mr='1rem'>
                     Login
                  </Link>
                  <Link as={ReactLink} to='join'>
                     Register
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

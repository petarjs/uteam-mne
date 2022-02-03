import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const DesktopSidebar = () => {
   return (
      <Flex flexDirection='column'>
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
      </Flex>
   )
}

export default DesktopSidebar

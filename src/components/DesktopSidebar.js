import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'

const DesktopSidebar = () => {
  return (
    <Flex
      flexDirection="column"
      padding="1.5rem"
      height="calc(100vh - 6rem)"
      borderRadius="0.8rem"
      gap="0.3rem"
      width="16rem"
      bgColor="#2f3437"
      boxShadow="md">
      <Link as={ReactLink} to="team">
        Pending for approval
      </Link>
      <Link as={ReactLink} to="team">
        Team
      </Link>
      <Link as={ReactLink} to="questions">
        Questions
      </Link>
      <Link as={ReactLink} to="company">
        Company Info
      </Link>
      <Link as={ReactLink} to="profile">
        My Profile
      </Link>
    </Flex>
  )
}

export default DesktopSidebar

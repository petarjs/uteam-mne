import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const PageLayout = ({ children, title }) => {
  return (
    <Flex bgColor="#2f3437" borderRadius="0.4rem" p="1.5rem" flexDirection="column" gap="0.8rem">
      <Heading as="h1" size="md">
        {title}
      </Heading>
      {children}
    </Flex>
  )
}

export default PageLayout

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { Flex, Heading, Text } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="40vh"
      flexDirection="column"
      width="max-content"
      margin="0 auto"
      gap="1rem">
      <FontAwesomeIcon icon={faSadTear} size="4x" />
      <Heading as="h1">404</Heading>
      <Text>Page not found</Text>
    </Flex>
  )
}

export default NotFound

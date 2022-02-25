import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const FormWrapper = (props) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      gap="2rem"
      width="100%"
      bgColor="#2f3437"
      borderRadius="0.5rem"
      minHeight="calc(100vh - 4.4rem)"
      padding="2rem 0.8rem"
      boxShadow="md">
      <Heading as="h2" color="white">
        {`uTeam - ${props.heading}`}
      </Heading>
      {props.children}
    </Flex>
  )
}

export default FormWrapper

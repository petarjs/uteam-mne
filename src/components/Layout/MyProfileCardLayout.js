import React from 'react'
import { Flex, Text, Divider } from '@chakra-ui/react'

const MyProfileCardLayout = ({ children, title, alignSelf }) => {
  return (
    <Flex
      alignSelf={alignSelf}
      borderRadius="0.4rem"
      bgColor="#434b4f"
      flexDirection="column"
      gap="0.5rem"
      padding="0.8rem">
      <Text fontSize="lg" px="0.5rem">
        {title}
      </Text>
      <Divider />
      {children}
    </Flex>
  )
}

export default MyProfileCardLayout

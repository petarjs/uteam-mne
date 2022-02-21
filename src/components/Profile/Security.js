import { VStack, Text, Input, Button, Flex, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import MyProfileCardLayout from '../Layout/MyProfileCardLayout'
import { loginUser } from '../../api/auth'
import { useForm } from 'react-hook-form'
import { updateUserPassword } from '../../api/auth'

const Security = ({ user }) => {
  const [error, setError] = useState()
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    console.log('uslo')
    try {
      const verifiedUser = await loginUser({
        identifier: user.attributes.email,
        password: data.currentPassword
      })

      if (verifiedUser.user.id === user.id) {
        const res = await updateUserPassword(verifiedUser.user.id, data.newPassword)
        console.log(res)
        setLoading(false)
      }
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }

  return (
    <MyProfileCardLayout title="Security" alignSelf="self-start">
      <VStack px="0.5rem">
        <Text alignSelf="self-start">Email</Text>
        <Text alignSelf="self-start" fontSize="md" mt="0 !important">
          {user.attributes.email}
        </Text>
      </VStack>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input hidden type="text" name="email" autoComplete="email" />
        <Flex flexDirection="column" gap="0.8rem" margin="1rem auto" px="0.5rem">
          <VStack>
            <Text alignSelf="self-start">Current password</Text>
            <Input
              type="password"
              required
              autoComplete="current-password"
              {...register('currentPassword')}></Input>
          </VStack>
          <VStack>
            <Text alignSelf="self-start">New password</Text>
            <Input
              type="password"
              required
              autoComplete="new-password"
              {...register('newPassword')}></Input>
          </VStack>
          <Box color="#f56a68">{error}</Box>
          <Button variant="submit" alignSelf="self-end" isLoading={loading} type="submit">
            Save
          </Button>
        </Flex>
      </form>
    </MyProfileCardLayout>
  )
}

export default Security

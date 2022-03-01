import React, { useState } from 'react'
import { Box, Text, Input, Button, Flex, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { updateProfile } from '../../api/profile'
import { uploadImage } from '../../api/uploadImage'
import MyProfileCardLayout from '../Layout/MyProfileCardLayout'
import { useProfileContext } from '../../hooks/profile-context'

const BasicInfo = ({ profile }) => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState(false)
  const { updateUserData } = useProfileContext()

  const onSubmit = async (data) => {
    setLoading(true)
    setError('')
    try {
      if (data.profileImg[0]) {
        const photoId = await uploadImage(data.profileImg[0])
        await updateProfile(profile.id, {
          name: data.name,
          profilePhoto: photoId
        })
      } else if (!data.profileImg[0] && data.name !== profile.attributes.name) {
        await updateProfile(profile.id, {
          name: data.name
        })
      }
      await updateUserData()
      setLoading(false)
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }
  return (
    <MyProfileCardLayout title="Basic Info" alignSelf="self-start">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="column" gap="0.8rem" margin="1rem auto" px="0.5rem">
          <VStack>
            <Text alignSelf="self-start">Name</Text>
            <Input
              type="text"
              size="md"
              defaultValue={profile.attributes.name}
              {...register('name')}
            />
          </VStack>
          <VStack>
            <Text alignSelf="self-start">Profile Photo</Text>
            <Input
              marginTop="0 !important"
              type="file"
              {...register('profileImg')}
              pt="0.2rem"
              accept="image/*"
            />
          </VStack>
          <Box color="#f56a68">{error}</Box>
          <Button variant="submit" isLoading={loading} type="submit" alignSelf="self-end">
            Save
          </Button>
        </Flex>
      </form>
    </MyProfileCardLayout>
  )
}

export default BasicInfo

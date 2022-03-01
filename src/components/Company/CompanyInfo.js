import React, { useState } from 'react'
import { Flex, VStack, Input, Text, Box, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { uploadImage } from '../../api/uploadImage'
import { updateCompany } from '../../api/company'

const CompanyInfo = ({ company }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: company.attributes.name
    }
  })

  const [error, setError] = useState()
  const [loading, setLoading] = useState()
  const [flag, setFlag] = useState()

  const onSubmit = async (data) => {
    setLoading(true)
    setError('')
    setFlag(false)
    try {
      if (data.logo[0]) {
        const imageId = await uploadImage(data.logo[0])
        await updateCompany(
          {
            name: data.name,
            logo: imageId
          },
          company.id
        )
      } else if (!data.logo[0] && data.name !== company.name) {
        await updateCompany({ name: data.name }, company.id)
      }
      setFlag(true)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <Flex>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Flex
          flexDirection="column"
          gap="0.8rem"
          margin="1rem auto"
          p="1rem"
          borderRadius="0.4rem"
          backgroundColor="#434b4f">
          <VStack>
            <Text alignSelf="self-start">Company Name</Text>
            <Input type="text" required {...register('name')}></Input>
          </VStack>
          <VStack>
            <Text alignSelf="self-start">Company Logo</Text>
            <Input
              marginTop="0 !important"
              type="file"
              {...register('logo')}
              pt="0.2rem"
              accept="image/*"
            />
          </VStack>
          <Box>
            {flag && <Box color="#7FFF00">Company data has been changed successfully!</Box>}
            <Box color="#f56a68">{error}</Box>
          </Box>
          <Button variant="submit" alignSelf="self-end" isLoading={loading} type="submit">
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

export default CompanyInfo

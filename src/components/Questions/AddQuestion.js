import React, { useState, useEffect } from 'react'
import PageLayout from '../Layout/PageLayout'
import { useForm } from 'react-hook-form'
import { Flex, VStack, Text, Input, Box, Button, Select } from '@chakra-ui/react'
import { getCompanyQuestions } from '../../api/company'
import { useProfileContext } from '../../hooks/profile-context'
import { addCompanyQuestion } from '../../api/company'

const AddQuestion = () => {
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const { userProfile } = useProfileContext()
  const [order, setOrder] = useState()
  const [flag, setFlag] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        if (userProfile) {
          const questions = await getCompanyQuestions(userProfile.attributes.company.data.id)
          const qOrder = questions[questions.length - 1].attributes.order
          setOrder(qOrder)
        }
      } catch (e) {
        setError(e.message)
      }
    })()
  }, [userProfile])

  const { register, handleSubmit } = useForm()

  const onSubmit = async (data, e) => {
    setLoading(true)
    setFlag(false)
    setError('')
    try {
      const questionData = {
        ...data,
        order: order + 1,
        company: userProfile.attributes.company.data.id
      }
      await addCompanyQuestion(questionData)
      setLoading(false)
      setFlag(true)
      e.target.reset()
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }

  return (
    <PageLayout title="Add new Questions">
      <Flex>
        <form action="" onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Flex
            flexDirection="column"
            gap="0.8rem"
            margin="1rem auto"
            p="1rem"
            borderRadius="0.4rem"
            backgroundColor="#434b4f">
            <VStack>
              <Text alignSelf="self-start">Question text</Text>
              <Input type="text" required {...register('text')} placeholder="Question text"></Input>
            </VStack>
            <VStack>
              <Text alignSelf="self-start">Question type</Text>
              <Select
                {...register('type', { required: true })}
                placeholder="Select question type"
                bg="#434b4f"
                isRequired={true}>
                <option value="text" style={{ backgroundColor: '#434b4f' }}>
                  Text
                </option>
                <option value="long_text" style={{ backgroundColor: '#434b4f' }}>
                  Long text
                </option>
                <option value="image" style={{ backgroundColor: '#434b4f' }}>
                  Image
                </option>
              </Select>
            </VStack>
            <Box>
              {flag && <Box color="#7FFF00">Question added!</Box>}
              <Box color="#f56a68">{error}</Box>
            </Box>

            <Button variant="submit" alignSelf="self-end" isLoading={loading} type="submit">
              Save
            </Button>
          </Flex>
        </form>
      </Flex>
    </PageLayout>
  )
}

export default AddQuestion

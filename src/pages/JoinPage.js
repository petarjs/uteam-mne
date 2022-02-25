import React, { useState } from 'react'
import { Flex, Button, Box, Link, Input, VStack, Text } from '@chakra-ui/react'
import { Link as ReactLink, useNavigate } from 'react-router-dom'
import FormInput from '../components/UI/FormInput'
import styles from '../styles/LoginPage.module.css'
import FormWrapper from '../components/UI/FormWrapper'
import { useForm } from 'react-hook-form'
import { createProfile, uploadProfileImage } from '../api/profile'
import { createUser } from '../api/auth'
import { createCompany } from '../api/company'
import { useAuthContext } from '../hooks/auth-context'

const RegisterPage = () => {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState()
  const [errorRegister, setErrorRegister] = useState('')
  const navigate = useNavigate()
  const { login } = useAuthContext()
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const user = await createUser({
        username: data.name,
        email: data.email,
        password: data.password
      })

      localStorage.setItem('token', user.jwt)

      const companyId = await createCompany({ name: `${data.name}'s company` }, user.jwt)
      const photoId = await uploadProfileImage(data.profileImg[0])

      await createProfile({
        status: 'pending',
        name: data.name,
        profilePhoto: photoId,
        user: `${user.id}`,
        company: companyId,
        answers: null
      })

      login(user.jwt)
      navigate('/team')
    } catch (e) {
      setErrorRegister(e.message)
      setLoading(false)
    }
  }

  return (
    <FormWrapper heading="Register">
      <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="name"
          type="text"
          placeholder="Name"
          label="Name"
          required={true}
          register={register}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          required={true}
          autoComplete="username"
          register={register}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          required={true}
          autoComplete="current-password"
          register={register}
        />
        <VStack>
          <Text alignSelf="self-start">Profile Photo</Text>
          <Input
            marginTop="0 !important"
            name="profileImg"
            type="file"
            placeholder="Upload file"
            required={true}
            {...register('profileImg')}
            pt="0.2rem"
            bgColor="white"
            accept="image/*"
          />
        </VStack>

        <Box color="#f56a68">{errorRegister}</Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Link as={ReactLink} to="/login">
            Already have an account?
          </Link>

          <Button isLoading={loading} type="submit" variant="submit">
            Register
          </Button>
        </Flex>
      </form>
    </FormWrapper>
  )
}

export default RegisterPage

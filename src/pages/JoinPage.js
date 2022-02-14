import React, { useState } from 'react'
import { Flex, Button, Box, Link } from '@chakra-ui/react'
import { Link as ReactLink, useNavigate } from 'react-router-dom'
import FormInput from '../components/UI/FormInput'
import { darken } from '@chakra-ui/theme-tools'
import styles from '../styles/LoginPage.module.css'
import FormWrapper from '../components/UI/FormWrapper'
import { useForm } from 'react-hook-form'
import { createProfile, uploadProfileImage } from '../api/profile'
import { createUser } from '../api/auth'
import { useAuthContext } from '../hooks/auth-context'
import { createCompany } from '../api/company'

const RegisterPage = () => {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState()
  const [errorRegister, setErrorRegister] = useState('')
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const user = await createUser({
        username: data.name,
        email: data.email,
        password: data.password
      })

      const companyId = await createCompany({ name: `${data.name}'s company` }, user.jwt)

      const profileId = await createProfile({
        status: 'pending',
        name: data.name,
        profilePhoto: null,
        user: `${user.id}`,
        company: companyId,
        answers: null
      })

      await uploadProfileImage(profileId, data.profileImg[0])
      login({ jwt: user.jwt, user: user })
      navigate('/')
    } catch (e) {
      console.log(e)
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
        <FormInput
          name="profileImg"
          type="file"
          placeholder="Upload file"
          label="Profie Photo"
          required={true}
          register={register}
          accept="image/*"
        />

        <Box color="#f56a68">{errorRegister}</Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Link as={ReactLink} to="/login">
            Already have an account?
          </Link>

          <Button
            transition="0.3s"
            isLoading={loading}
            bgColor="#f56a68"
            type="submit"
            color="white"
            _hover={{ bgColor: darken('#f56a68', 5), px: '2rem' }}>
            Register
          </Button>
        </Flex>
      </form>
    </FormWrapper>
  )
}

export default RegisterPage

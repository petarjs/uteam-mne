import React, { useRef, useState } from 'react'
import { Flex, Box, Link, Button } from '@chakra-ui/react'
import FormInput from '../components/UI/FormInput'
import styles from '../styles/LoginPage.module.css'
import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { loginUser } from '../api/auth'
import { useAuthContext } from '../hooks/auth-context'
import FormWrapper from '../components/UI/FormWrapper'

const LoginPage = () => {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [errorLogin, setErrorLogin] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await loginUser({
        identifier: emailInputRef.current.value.trim(),
        password: passwordInputRef.current.value.trim()
      })
      const { jwt } = response
      login(jwt)
      navigate('/team')
    } catch (e) {
      setErrorLogin(e.message)
      setLoading(false)
    }
  }

  return (
    <FormWrapper heading="Login">
      <form action="" className={styles.form} onSubmit={handleFormSubmit}>
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          ref={emailInputRef}
          required={true}
          autoComplete="username"
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          ref={passwordInputRef}
          required={true}
          autoComplete="current-password"
        />
        <Box color="#f56a68">{errorLogin}</Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Link as={ReactLink} to="/join">
            Don&apos;t have an account?
          </Link>

          <Button isLoading={loading} variant="submit" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </FormWrapper>
  )
}

export default LoginPage

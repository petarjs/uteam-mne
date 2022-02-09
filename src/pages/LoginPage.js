import React, { useRef, useState } from 'react'
import { Heading, Flex, Box, Link, Button } from '@chakra-ui/react'
import FormInput from '../components/UI/FormInput'
import styles from '../styles/LoginPage.module.css'
import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { loginUser } from '../api/auth'
import { darken } from '@chakra-ui/theme-tools'
import { useAuthContext } from '../hooks/auth-context'

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
            password: passwordInputRef.current.value.trim(),
         })
         login(response)
         navigate('/team')
      } catch (e) {
         setErrorLogin(e.message)
         setLoading(false)
      }
   }

   return (
      <Flex
         flexDirection='column'
         alignItems='center'
         justifyContent='flex-start'
         gap='2rem'
         width='100%'
         bgColor='#2f3437'
         borderRadius='0.5rem'
         minHeight='calc(100vh - 6rem)'
         padding='2rem 0.8rem'
         boxShadow='md'
      >
         <Heading as='h2' color='white'>
            uTeam - Login
         </Heading>
         <form action='' className={styles.form} onSubmit={handleFormSubmit}>
            <FormInput
               type='email'
               placeholder='Email'
               label='Email'
               ref={emailInputRef}
               required={true}
            />
            <FormInput
               type='password'
               placeholder='Password'
               label='Password'
               ref={passwordInputRef}
               required={true}
            />
            <Box color='#f56a68'>{errorLogin}</Box>
            <Flex justifyContent='space-between' alignItems='center'>
               <Link as={ReactLink} to='/join'>
                  Don't have an account?
               </Link>

               <Button
                  transition='0.3s'
                  isLoading={loading}
                  bgColor='#f56a68'
                  type='submit'
                  color='white'
                  _hover={{ bgColor: darken('#f56a68', 5), px: '2rem' }}
               >
                  Submit
               </Button>
            </Flex>
         </form>
      </Flex>
   )
}

export default LoginPage

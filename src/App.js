import './App.css'
import { Flex, Button, useColorMode } from '@chakra-ui/react'

function App() {
   const { toggleColorMode } = useColorMode()
   return (
      // Testing
      <Flex height='100vh' alignItems='center' justifyContent='center'>
         <Button onClick={toggleColorMode} variant='primary'>
            Toggle Color Mode
         </Button>
      </Flex>
   )
}

export default App

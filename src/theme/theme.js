import { extendTheme } from '@chakra-ui/react'
import { buttonStyles as Button } from './components/buttonStyles'

export const theme = extendTheme({
   styles: {
      global: {
         body: {
            color: '#e8e9e9',
            bg: '#434b4f',
         },
      },
   },
   colors: {
      primary: '#845EC2',
   },
   components: {
      Button,
      Link: {
         baseStyle: {
            _focus: {
               boxShadow: 'none',
            },
         },
      },
   },
})

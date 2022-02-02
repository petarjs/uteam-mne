import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import { buttonStyles as Button } from './components/buttonStyles'

export const theme = extendTheme({
   styles: {
      global: (props) => ({
         body: {
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('white', '#2e3336')(props),
         },
      }),
   },
   colors: {
      primary: '#845EC2',
   },
   components: {
      Button,
   },
})

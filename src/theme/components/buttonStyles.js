import { mode, darken, whiten } from '@chakra-ui/theme-tools'

export const buttonStyles = {
   baseStyle: {},
   sizes: {},
   variants: {
      primary: (props) => ({
         bg: 'primary',
         color: 'white',
         _hover: {
            bg: mode(darken('primary', 20), whiten('primary', 20))(props),
         },
         _focus: { boxShadow: 'none' },
      }),
   },
   defaultProps: {},
}

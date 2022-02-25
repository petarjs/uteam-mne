import { darken } from '@chakra-ui/theme-tools'

export const buttonStyles = {
  baseStyle: {
    _active: {
      bgColor: 'unset !important'
    },
    _hover: (props) => ({
      bgColor: 'unset !important'(props),
      boxShadow: 'none'
    }),
    _focus: {
      bgColor: 'unset !important',
      boxShadow: 'none'
    }
  },
  sizes: {},
  variants: {
    submit: {
      bgColor: '#f56a68',
      transition: '0.3s',
      color: 'white',
      _hover: { bgColor: darken('#f56a68', 5), px: '2rem' }
    }
  },
  defaultProps: {}
}

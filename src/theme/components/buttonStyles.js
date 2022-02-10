import { mode, darken, whiten } from '@chakra-ui/theme-tools'

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
    primary: (props) => ({
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: mode(darken('primary', 20), whiten('primary', 20))(props)
      },
      _focus: { boxShadow: 'none' }
    })
  },
  defaultProps: {}
}

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#000407',
        color: '#fefefe',
        mb: '30vh',
      },
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  /* components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
        bgColor: '#fff',
        color: 'red',
      },
    },
    MenuList: {
      baseStyle: { bgColor: '#000', borderColor: '#fefefe15' },
    },
    MenuItem: {
      baseStyle: {
        px: 6,
        py: 2,
        bgColor: '#000',
        _hover: {
          bgColor: '#fefefe10',
        },
      },
    },
  }, */
})
export default theme

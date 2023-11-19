import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
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
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        new: {
          py: 30,
          color: '#513BD9',
          bgColor: '#000000CC',
          border: '1px solid #fefefe10',
          _hover: {
            borderColor: '#fefefe30',
          },
        },
        primary: {
          width: 'full',
          color: '#fefefe',
          bgColor: '#513BD9',
          border: '1px solid #fefefe10',
          _hover: {
            bgColor: '#702DFF',
          },
        },
        secondary: {
          width: 'full',
          color: '#fefefe',
          bgColor: '#fefefe15',
          border: '1px solid #fefefe10',
          _hover: {
            borderColor: '#fefefe30',
          },
        },
      },
    },
    Input: {
      baseStyle: {
        bgColor: '#fefefe15',
        h: '200px',
      },
      variants: {
        default: {
          color: 'red',
          _focus: {
            borderColor: '#513BD9',
          },
        },
      },
    },
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

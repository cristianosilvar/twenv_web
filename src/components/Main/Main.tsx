import { Box } from '@chakra-ui/react'
interface MainInterface {
  children: React.ReactNode
}

export default function Main({ children }: MainInterface) {
  return (
    <Box
      width="80%"
      mx="auto"
      minH="60vh"
      px="2rem"
      py="1rem"
      border="1px solid #35383D"
      borderRadius="xl"
      bgColor="#0B0F18"
      fontFamily="font-family: 'Lato', sans-serif;"
    >
      {children}
    </Box>
  )
}

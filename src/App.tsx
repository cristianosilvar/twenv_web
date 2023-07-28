import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import { Header } from "./components/Header/Header"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header/>
  </ChakraProvider>
)

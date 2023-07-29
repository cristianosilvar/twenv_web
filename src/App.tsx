import './style/global.css'

import {
  ChakraProvider,
  Box,
  theme
} from "@chakra-ui/react"

import { Header } from "./components/Header/Header"

import Spending from "./pages/Spending/Spending"
import Earnings from "./pages/Earnings/Earnings"

import { BrowserRouter, Routes, Route } from "react-router-dom"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Header/>
    <Box width='80%' mx='auto' minH='60vh' border='1px solid #35383D' borderRadius='.75rem' bgColor='#0B0F18'>
      <BrowserRouter>
        <Routes>
          <Route path="/spending" element={<Spending/>} />
          <Route path="/earnings" element={<Earnings/>} />
        </Routes>
      </BrowserRouter>
    </Box>
  </ChakraProvider>
)

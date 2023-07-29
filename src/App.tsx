import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"

import { Header } from "./components/Header/Header"

import Spending from "./pages/Spending/Spending"
import Earnings from "./pages/Earnings/Earnings"

import { BrowserRouter, Routes, Route } from "react-router-dom"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/spending" element={<Spending/>} />
        <Route path="/earnings" element={<Earnings/>} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)

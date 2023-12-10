import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import theme from './theme'
import { AuthProvider } from 'context/authContext'

import Header from './components/Header'

import Home from './pages/Home'
import Spending from './pages/Spending'
import Earnings from './pages/Earnings'

export const App = () => (
  <AuthProvider>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spendings" element={<Spending />} />
          <Route path="/earnings" element={<Earnings />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </AuthProvider>
)

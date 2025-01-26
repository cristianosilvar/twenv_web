import { Provider } from '@/components/ui/provider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthProvider } from '@/context/authContext'

import Header from './components/Header'

import Home from './pages/Home'
import Spending from './pages/Spending'
import Earnings from './pages/Earnings'
import { Toaster } from './components/ui/toaster'
import { system } from '../theme'

export const App = () => (
  <AuthProvider>
    <Toaster />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spendings" element={<Spending />} />
        <Route path="/earnings" element={<Earnings />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
)

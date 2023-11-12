import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./theme";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import RegisterUser from "./pages/Register";
import Spending from "./pages/Spending/Spending";
import Earnings from "./pages/Earnings/Earnings";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spending" element={<Spending />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

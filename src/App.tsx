import "./style/global.css";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import Spending from "./pages/Spending/Spending";
import Earnings from "./pages/Earnings/Earnings";
import Home from "./pages/Home/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spending" element={<Spending />} />
          <Route path="/earnings" element={<Earnings />} />
        </Routes>
      </Main>
    </BrowserRouter>
  </ChakraProvider>
);

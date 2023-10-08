import { NavLink, Link } from "react-router-dom";
import logo_twenv from "../../assets/logo-twenv.svg";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <Box
        w="80%"
        mx="auto"
        py="2.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap="2rem">
          <Link to="/">
            <Image src={logo_twenv} width="100px" />
          </Link>
          <Box w=".01rem" height="20px" bgColor="white" opacity=".5" />
          <Breadcrumb>
            <BreadcrumbItem
              fontSize="lg"
              fontWeight="normal"
              gap="1.5rem"
              color="white"
            >
              <NavLink to="spending">
                <BreadcrumbLink
                  opacity=".8"
                  textDecoration="none"
                  _hover={{
                    opacity: 1,
                  }}
                >
                  Despesas
                </BreadcrumbLink>
              </NavLink>
              <NavLink to="earnings">
                <BreadcrumbLink
                  opacity=".8"
                  textDecoration="none"
                  _hover={{
                    opacity: 1,
                  }}
                >
                  Ganhos
                </BreadcrumbLink>
              </NavLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Text
          fontSize="xl"
          _hover={{
            textDecoration: "none",
            opacity: 0.7,
          }}
        >
          <Link to="/register">Entrar</Link>
        </Text>
      </Box>
    </header>
  );
}

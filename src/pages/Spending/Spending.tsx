import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  GridItem,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import Card from "../../components/Card/Card";
import { InputText } from "../../components/Inputs/InputText/InputText";
import { InputTextarea } from "../../components/Inputs/InputTextarea/InputTextarea";
import { InputNumberLeftElement } from "../../components/Inputs/InputNumberLeftElement/InputNumberLeftElement";

export default function Spending() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("xl");

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <section>
      <Flex gap="4" wrap="wrap">
        <Box display="flex" gap="4" flexWrap="wrap">
          <Card
            is="spending"
            value={900}
            date="31/07"
            description="Sem descrição"
          />
        </Box>

        <Box onClick={() => handleSizeClick("xl")}>
          <Card is="newSpending" />
        </Box>
      </Flex>
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="#181D29"
          border="1px solid #ffffff15"
          borderRadius="md"
          fontFamily="'Poppins', sans-serif"
        >
          <ModalHeader
            fontSize="2xl"
            textAlign="center"
            fontWeight="semibold"
            opacity=".85"
          >
            Nova Despesa
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <InputGroup>
              <SimpleGrid columns={12} spacing={6}>
                <GridItem colSpan={12}>
                  <InputTextarea
                    placeholder={
                      "Qual o nome, descrição e/ou informação dessa despesa?"
                    }
                    label={"Descrição"}
                    size="lg"
                    resize="none"
                    isReadOnly={false}
                    isRequired
                  />
                </GridItem>
                <GridItem colSpan={5}>
                  <InputNumberLeftElement
                    leftElement={"R$"}
                    placeholder={"0,00"}
                    label={"Valor"}
                    size="lg"
                    isReadOnly={false}
                    isRequired
                  />
                </GridItem>
                <GridItem colSpan={7}>
                  <InputText
                    placeholder={"Teste"}
                    label={"Data"}
                    size="lg"
                    isReadOnly={false}
                    isRequired
                  ></InputText>
                </GridItem>
              </SimpleGrid>
            </InputGroup>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
}

import { useState } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

import Card from "../../components/Card/Card";
import Main from "../../components/Main/Main";
import InputDate from "../../components/Inputs/InputDate/InputDate";
import InputNumber from "../../components/Inputs/InputNumber/InputNumber";
import InputTextarea from "../../components/Inputs/InputTextarea/InputTextarea";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/Buttons/ButtonSecondary/ButtonSecondary";

export default function Spending() {
  const defaultValues = {
    descricao: "Isso",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const methods = useForm({ defaultValues });
  const { control, handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Main>
      <Flex gap="4" wrap="wrap">
        <Box display="flex" gap="4" flexWrap="wrap">
          <Card
            is="spending"
            value={900}
            date="31/07"
            description="Sem descrição"
          />
        </Box>
        <Card is="newSpending" onClick={() => onOpen()} />
      </Flex>
      <Modal onClose={onClose} onEsc={onClose} size={"xl"} isOpen={isOpen}>
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
          <ModalBody>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                        control={control}
                        name={"description"}
                      />
                    </GridItem>
                    <GridItem colSpan={5}>
                      <InputNumber
                        leftElement={"R$"}
                        placeholder={"0,00"}
                        label={"Valor"}
                        size="lg"
                        isRequired
                        name={"value"}
                        control={control}
                      />
                    </GridItem>
                    <GridItem colSpan={7}>
                      <InputDate
                        placeholder={"Teste"}
                        label={"Data"}
                        size="lg"
                        control={control}
                        name={"date"}
                        isRequired
                      ></InputDate>
                    </GridItem>
                    <GridItem colSpan={12} mt={[4, 6, 8]}>
                      <ButtonPrimary
                        type="submit"
                        w={"full"}
                        size={"lg"}
                        text="Adicionar"
                      />
                      <ButtonSecondary
                        size={"lg"}
                        w={"full"}
                        mt={2}
                        text="Cancelar"
                      />
                    </GridItem>
                  </SimpleGrid>
                </InputGroup>
              </form>
            </FormProvider>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Main>
  );
}

import type { StackProps } from '@chakra-ui/react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  MenuRoot,
  GridItem,
  Spacer,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { formatDate, formatMoney } from '@/shared/lib';
import type { BaseModel } from '@/shared/model';
import { IconOptions } from '@/shared/ui/icons';
import { MenuContent, MenuTrigger, MenuItem } from '@/shared/ui/menu';

interface CardInfoProps extends StackProps {
  data: BaseModel;
  handleUpdate: (params: BaseModel) => void;
  handleDelete: (id: string) => void;
}

export const CardInfo = ({
  data,
  handleUpdate,
  handleDelete,
  ...props
}: CardInfoProps) => {
  const methods = useForm<BaseModel>({
    defaultValues: { ...data, date: formatDate(data.date, 'dateInput') },
  });

  const { handleSubmit } = methods;

  return (
    <GridItem
      colSpan={{ base: 12, md: 3 }}
      pb={6}
      pl={6}
      align="left"
      bgColor="#000000CC"
      border="1px solid #fefefe10"
      cursor="pointer"
      {...props}
    >
      <VStack justify="space-between" w="full" align="start" minH="100px">
        <VStack w="full">
          <HStack justify="space-between" w="full">
            <VStack align="start" w="full">
              <HStack
                pt={6}
                justify="space-between"
                fontWeight="semibold"
                w="full"
              >
                <Heading
                  as="h5"
                  size="md"
                  fontWeight="semibold"
                  css={{
                    '& > span': {
                      opacity: 0.5,
                    },
                  }}
                >
                  <span>R$ </span>
                  {formatMoney({ value: data.value }).replace('R$', '').trim()}
                </Heading>
                <Spacer />
                <Heading as="h6" size="sm" fontWeight="normal" opacity={0.5}>
                  {formatDate(data.date, 'dayAndMonth')}
                </Heading>
              </HStack>
            </VStack>
            <Box px={2}>
              <MenuRoot>
                <MenuTrigger asChild>
                  <IconOptions boxSize="25px" opacity={0.5} cursor="pointer" />
                </MenuTrigger>
                <MenuContent
                  bgColor="#000"
                  borderColor="#fefefe15"
                  minW="min-content"
                >
                  <FormProvider {...methods}>
                    <MenuItem
                      value="edit"
                      bgColor="#000"
                      px={8}
                      py={2}
                      _hover={{
                        bgColor: '#fefefe10',
                      }}
                      onClick={handleSubmit(handleUpdate)}
                    >
                      Editar
                    </MenuItem>
                  </FormProvider>
                  <MenuItem
                    value="delete"
                    bgColor="#000"
                    px={8}
                    py={2}
                    _hover={{
                      bgColor: '#fefefe10',
                    }}
                    onClick={() => handleDelete(data?.id || '')}
                  >
                    Excluir
                  </MenuItem>
                </MenuContent>
              </MenuRoot>
            </Box>
          </HStack>
        </VStack>
        <Text fontSize="md" opacity={0.5} fontWeight="normal" textAlign="left">
          {data?.description || 'Sem descrição'}
        </Text>
      </VStack>
    </GridItem>
  );
};

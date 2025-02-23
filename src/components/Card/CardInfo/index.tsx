import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  MenuRoot,
  GridItem,
  Spacer,
  StackProps,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import ModalDefault from '@/components/Modal';
import { MenuContent, MenuTrigger, MenuItem } from '@/shared/ui/menu';
import { toaster } from '@/shared/ui/toaster';
import { IEarning } from '@/features/earning/types';
import { IconOptions } from '@/shared/icons';
import formatDate from '@/shared/utils/format-date';
import { formatMoney } from '@/shared/utils/format-money';

interface ICardInfo extends StackProps {
  data: IEarning;
  callback: (onClose: () => void, data: any, id: string) => void;
  callbackDelete: (id: string | undefined) => void;
}

const CardInfo = ({ data, callback, callbackDelete, ...props }: ICardInfo) => {
  const methods = useForm({
    defaultValues: { ...data, date: formatDate(data.date, 'dateInput') },
  });

  const { handleSubmit } = methods;

  const [isHover, setIsHover] = useState(false);

  const callbackUpdate = useCallback(() => {
    handleSubmit(
      (formData) => {
        callback(() => {}, formData, data?.id || '');
      },
      ({ value }) => {
        const toastId = 'errMessage';
        const errMessage = value?.message;
        const toastIsActive = toaster.isVisible(toastId);

        if (!toastIsActive) {
          toaster.create({
            id: toastId,
            description: errMessage as any,
            type: 'warning',
            duration: 5000,
            placement: 'top-end',
          });
        }
      },
    )();
  }, [callback, data, handleSubmit]);

  const callbackCancel = (onClose: () => void) => {
    onClose();
  };

  return (
    <GridItem
      colSpan={{ base: 12, md: 3 }}
      pb={6}
      pl={6}
      align="left"
      bgColor="#000000CC"
      border="1px solid #fefefe10"
      cursor="pointer"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
                    <ModalDefault
                      title="Alterar"
                      callback={callbackUpdate}
                      callbackCancel={callbackCancel}
                    >
                      <MenuItem
                        value="edit"
                        bgColor="#000"
                        px={8}
                        py={2}
                        _hover={{
                          bgColor: '#fefefe10',
                        }}
                      >
                        Editar
                      </MenuItem>
                    </ModalDefault>
                  </FormProvider>
                  <MenuItem
                    value="delete"
                    bgColor="#000"
                    px={8}
                    py={2}
                    _hover={{
                      bgColor: '#fefefe10',
                    }}
                    onClick={() => callbackDelete(data.id)}
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

export default CardInfo;

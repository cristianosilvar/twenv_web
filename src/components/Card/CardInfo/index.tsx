import { useCallback, useState } from 'react'
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  GridItem,
  Spacer,
  StackProps,
  useToast,
} from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { IconOptions } from 'icons'

import ModalDefault from 'components/Modal'

import formatReal from 'utils/fomatReal'
import formatDate from 'utils/formatDate'

import { InfoInterface } from 'interfaces/info'

interface ICardInfo extends StackProps {
  data: InfoInterface
  callback: (onClose: () => void, data: any, id: string) => void
  callbackDelete: (id: string | undefined) => void
}

const CardInfo = ({ data, callback, callbackDelete, ...props }: ICardInfo) => {
  const toast = useToast()
  const methods = useForm({
    defaultValues: { ...data, date: formatDate(data.date, 'dateInput') },
  })

  const { handleSubmit } = methods

  const [isHover, setIsHover] = useState(false)

  const callbackUpdate = useCallback(
    (onClose: () => void) => {
      handleSubmit(
        formData => {
          callback(onClose, formData, data?.id || '')
        },
        ({ value }) => {
          const toastId = 'errMessage'
          const errMessage = value?.message
          const toastIsActive = toast.isActive(toastId)

          if (!toastIsActive) {
            toast({
              id: toastId,
              description: errMessage,
              status: 'error',
              duration: 5000,
              position: 'top-right',
              isClosable: false,
            })
          }
        }
      )()
    },
    [callback, data, handleSubmit, toast]
  )

  const callbackCancel = (onClose: () => void) => {
    onClose()
  }

  return (
    <HStack
      as={GridItem}
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
                  sx={{
                    '& > span': {
                      opacity: 0.5,
                    },
                  }}
                >
                  <span>R$ </span>
                  {formatReal(data.value)}
                </Heading>
                <Spacer />
                <Heading as="h6" size="sm" fontWeight="normal" opacity={0.5}>
                  {formatDate(data.date, 'dayAndMonth')}
                </Heading>
              </HStack>
            </VStack>
            <Box px={2}>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      opacity={{ base: 1, sm: isHover || isOpen ? 1 : 0 }}
                      transition="ease-out .2s"
                    >
                      <Icon
                        as={IconOptions}
                        boxSize="25px"
                        opacity={0.5}
                        cursor="pointer"
                      />
                    </MenuButton>
                    <MenuList
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
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
          </HStack>
        </VStack>
        <Text fontSize="md" opacity={0.5} fontWeight="normal" textAlign="left">
          {data?.description || 'Sem descrição'}
        </Text>
      </VStack>
    </HStack>
  )
}

export default CardInfo

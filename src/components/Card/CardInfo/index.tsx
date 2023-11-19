import { useState } from 'react'
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
} from '@chakra-ui/react'
import { IconOptions } from 'icons'

import InfoInterface from 'interfaces/info'
import formatReal from 'utils/fomatReal'
import formatDate from 'utils/formatDate'

interface ICardInfo extends StackProps {
  data: InfoInterface
}

const CardInfo = ({ data, ...props }: ICardInfo) => {
  const [isHover, setIsHover] = useState(false)

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
                      <MenuItem
                        bgColor="#000"
                        px={8}
                        py={2}
                        _hover={{
                          bgColor: '#fefefe10',
                        }}
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
          {data.description || 'Sem descrição'}
        </Text>
      </VStack>
    </HStack>
  )
}

export default CardInfo

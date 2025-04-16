import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Flex,
  GridItem,
  HStack,
} from '@chakra-ui/react';
import { Plus } from 'lucide-react';
import { FormProvider } from 'react-hook-form';

import { formatDate } from '@/shared/lib';
import { CardInfo, Button } from '@/shared/ui';

import type { useEarningListModel } from '../model';

import { ModalCreateEarning } from './modal-create-earning';
import { ModalUpdateEarning } from './modal-update-earning';

type EarningListProps = ReturnType<typeof useEarningListModel>;

export const EarningsList = (props: EarningListProps) => {
  const {
    form,
    earningsList = [],
    currentDate,
    handleCancelEarning,
    handleCreateEarning,
    handleUpdateEarning,
    handleDeleteEarning,
  } = props;

  return (
    <Box w="80%" marginInline="auto" mt="30px">
      <Flex justifyContent="space-between">
        <Box>
          <Heading as="h2">Ganhos</Heading>
          <Text fontWeight="600" color="#fefefe50">
            {formatDate(currentDate, 'monthName')}
          </Text>
        </Box>
        <FormProvider {...form}>
          <ModalCreateEarning
            title="Novo ganho"
            callback={handleCreateEarning}
            callbackCancel={handleCancelEarning}
          >
            <Button variant="secondary">
              Novo ganho <Plus />
            </Button>
          </ModalCreateEarning>
        </FormProvider>
      </Flex>
      {earningsList?.length > 0 ? (
        <SimpleGrid columns={12} mt="30px" gap="4">
          {earningsList?.map((earning) => (
            <GridItem colSpan={{ base: 12, md: 6, lg: 3 }} key={earning.id}>
              <CardInfo.Root>
                <HStack justify="space-between" fontWeight="semibold" w="full">
                  <CardInfo.Value value={earning.value} />
                  <HStack>
                    <CardInfo.Date date={earning.date} />
                    <CardInfo.MenuOptions>
                      <FormProvider {...form}>
                        <ModalUpdateEarning
                          earning={earning}
                          callback={(data) =>
                            handleUpdateEarning(data, earning.id ?? '')
                          }
                          callbackCancel={() => handleDeleteEarning(earning.id)}
                        >
                          <CardInfo.Option value="update">
                            Editar
                          </CardInfo.Option>
                        </ModalUpdateEarning>
                      </FormProvider>
                      <CardInfo.Option
                        value="delete"
                        onClick={() => handleDeleteEarning(earning.id)}
                      >
                        Excluir
                      </CardInfo.Option>
                    </CardInfo.MenuOptions>
                  </HStack>
                </HStack>
                <CardInfo.Description description={earning.description ?? ''} />
              </CardInfo.Root>
            </GridItem>
          ))}
        </SimpleGrid>
      ) : (
        <Box mt="40px" color="gray.500">
          Ainda não há ganhos adicionados
        </Box>
      )}
    </Box>
  );
};

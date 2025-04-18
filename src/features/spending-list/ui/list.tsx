import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  GridItem,
  HStack,
} from '@chakra-ui/react';
import { Plus } from 'lucide-react';
import { FormProvider } from 'react-hook-form';

import { formatDate } from '@/shared/lib';
import { Button, CardInfo } from '@/shared/ui';

import type { useSpendingListModel } from '../model';

import { ModalCreateSpending } from './modal-create-spending';
import { ModalUpdateSpending } from './modal-update-spending';

type SpendingListProps = ReturnType<typeof useSpendingListModel>;

export default function SpendingsList(props: SpendingListProps) {
  const {
    spendingsList = [],
    form,
    currentDate,
    handleCancelSpending,
    handleCreateSpending,
    handleUpdateSpending,
    handleDeleteSpending,
  } = props;

  return (
    <Box w="80%" marginInline="auto" mt="30px">
      <Flex justifyContent="space-between">
        <Box>
          <Heading as="h2">Despesas</Heading>
          <Text fontWeight="600" color="#fefefe50">
            {formatDate(currentDate, 'monthName')}
          </Text>
        </Box>
        <FormProvider {...form}>
          <ModalCreateSpending
            title="Nova despesa"
            callback={handleCreateSpending}
            callbackCancel={handleCancelSpending}
          >
            <Button variant="secondary">
              Nova despesa <Plus />
            </Button>
          </ModalCreateSpending>
        </FormProvider>
      </Flex>
      {spendingsList?.length > 0 ? (
        <SimpleGrid columns={12} mt="30px" gap="4">
          {spendingsList?.map((spending) => (
            <GridItem colSpan={{ base: 12, md: 6, lg: 3 }} key={spending.id}>
              <CardInfo.Root>
                <HStack justify="space-between" fontWeight="semibold" w="full">
                  <CardInfo.Value value={spending.value} />
                  <HStack>
                    <CardInfo.Date date={spending.date} />
                    <CardInfo.MenuOptions>
                      <FormProvider {...form}>
                        <ModalUpdateSpending
                          spending={spending}
                          callback={(data) =>
                            handleUpdateSpending(data, spending.id ?? '')
                          }
                          callbackCancel={() =>
                            handleDeleteSpending(spending.id)
                          }
                        >
                          <CardInfo.Option value="update">
                            Editar
                          </CardInfo.Option>
                        </ModalUpdateSpending>
                      </FormProvider>
                      <CardInfo.Option
                        value="delete"
                        onClick={() => handleDeleteSpending(spending.id)}
                      >
                        Excluir
                      </CardInfo.Option>
                    </CardInfo.MenuOptions>
                  </HStack>
                </HStack>
                <CardInfo.Description
                  description={spending.description ?? ''}
                />
              </CardInfo.Root>
            </GridItem>
          ))}
        </SimpleGrid>
      ) : (
        <Box mt="40px" color="gray.500">
          Ainda não há despesas adicionadas
        </Box>
      )}
    </Box>
  );
}

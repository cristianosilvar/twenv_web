import { Box, SimpleGrid, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { Plus } from 'lucide-react';
import { FormProvider } from 'react-hook-form';

import { formatDate } from '@/shared/lib';
import { CardInfo } from '@/shared/ui';

import type { useSpendingListModel } from '../model';

import { ModalCreateSpending } from './modal-create-spending';

type SpendingListProps = ReturnType<typeof useSpendingListModel>;

export default function SpendingsList(props: SpendingListProps) {
  const {
    spendingsList,
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
              Novo ganho <Plus />
            </Button>
          </ModalCreateSpending>
        </FormProvider>
      </Flex>
      <SimpleGrid columns={12} mt="30px" gap="4">
        {spendingsList?.map((spending) => (
          <CardInfo
            key={spending.id}
            data={spending}
            callback={handleUpdateSpending}
            callbackDelete={handleDeleteSpending}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

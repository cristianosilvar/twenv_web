import { Box, Text, Heading, SimpleGrid, Flex } from '@chakra-ui/react';
import { Plus } from 'lucide-react';
import { FormProvider } from 'react-hook-form';

import { formatDate } from '@/shared/lib';
import { CardInfo, Button } from '@/shared/ui';

import type { useEarningListModel } from '../model';

import { ModalCreateEarning } from './modal-create-earning';

type EarningListProps = ReturnType<typeof useEarningListModel>;

export const EarningsList = (props: EarningListProps) => {
  const {
    form,
    earningsList,
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
      <SimpleGrid columns={12} mt="30px" gap="4">
        {earningsList?.map((earning) => (
          <CardInfo
            key={earning.id}
            data={earning}
            callback={handleUpdateEarning}
            callbackDelete={handleDeleteEarning}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

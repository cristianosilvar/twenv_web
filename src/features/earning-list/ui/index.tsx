import { Box, Text, Heading, SimpleGrid, GridItem } from '@chakra-ui/react';
import { FormProvider } from 'react-hook-form';

import CardInfo from '@/components/Card/CardInfo';
import ModalDefault from '@/components/Modal';
import { IconNew } from '@/shared/icons';
import { Button } from '@/shared/ui/button';
import formatDate from '@/shared/utils/format-date';

import type { useEarningListModel } from '../model';

const defaultValuesEarning = {
  description: '',
  value: 0,
  date: formatDate(new Date(), 'dateInput'),
};

type EarningListPageProps = ReturnType<typeof useEarningListModel>;

export default function EarningsPage(props: EarningListPageProps) {
  const {
    earnings,
    form,
    currentDate,
    handleCancelEarning,
    handleCreateEarning,
    handleUpdateEarning,
    handleDeleteEarning,
  } = props;

  return (
    <Box w="80%" marginInline="auto" mt="30px">
      <Heading as="h2">Ganhos</Heading>
      <Text fontWeight="600" color="#fefefe50">
        {formatDate(currentDate, 'monthName')}
      </Text>
      <SimpleGrid columns={12} mt="30px" gap="4">
        {earnings?.map((earning) => (
          <CardInfo
            key={earning.id}
            data={earning}
            callback={handleUpdateEarning}
            callbackDelete={handleDeleteEarning}
          />
        ))}
        <GridItem colSpan={{ base: 12, sm: 1 }}>
          <FormProvider {...form}>
            <ModalDefault
              title="Novo ganho"
              callback={handleCreateEarning}
              callbackCancel={handleCancelEarning}
            >
              <Button boxSize="full" variant="new">
                <IconNew boxSize="25px" />
              </Button>
            </ModalDefault>
          </FormProvider>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

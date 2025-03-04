import { useMemo } from 'react';

import { GetListSpendingService, HttpClient } from '@/shared/api';

import {
  CreateSpendingService,
  UpdateSpendingService,
  DeleteSpendingService,
} from '../api';
import { useSpendingListModel } from '../model/use-spending-list';

import SpendingsList from './list';

export const SpendingListPage = () => {
  const http = useMemo(() => new HttpClient(), []);

  const createSpendingService = useMemo(
    () => new CreateSpendingService(http),
    [http],
  );
  const updateSpendingService = useMemo(
    () => new UpdateSpendingService(http),
    [http],
  );
  const deleteSpendingService = useMemo(
    () => new DeleteSpendingService(http),
    [http],
  );
  const getListSpendingService = useMemo(
    () => new GetListSpendingService(http),
    [http],
  );

  const methods = useSpendingListModel({
    createSpendingService,
    updateSpendingService,
    deleteSpendingService,
    getListSpendingService,
  });

  return <SpendingsList {...methods} />;
};

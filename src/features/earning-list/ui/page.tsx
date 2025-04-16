import { useMemo } from 'react';

import { GetListEarningService, HttpClient } from '@/shared/api';

import {
  CreateEarningService,
  UpdateEarningService,
  DeleteEarningService,
} from '../api';
import { useEarningListModel } from '../model';

import { EarningsList } from './list';

export const EarningListPage = () => {
  const http = useMemo(() => new HttpClient(), []);

  const createEarningService = useMemo(
    () => new CreateEarningService(http),
    [http],
  );
  const updateEarningService = useMemo(
    () => new UpdateEarningService(http),
    [http],
  );
  const deleteEarningService = useMemo(
    () => new DeleteEarningService(http),
    [http],
  );
  const getListEarningService = useMemo(
    () => new GetListEarningService(http),
    [http],
  );

  const methods = useEarningListModel({
    createEarningService,
    updateEarningService,
    deleteEarningService,
    getListEarningService,
  });

  return <EarningsList {...methods} />;
};

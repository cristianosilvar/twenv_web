import { z } from 'zod';

import { earningSchema } from '../schema';

export interface IEarning {
  id?: string;
  date: Date;
  value: number;
  description?: string;
}

export type IEarningForm = z.infer<typeof earningSchema>;

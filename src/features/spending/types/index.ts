import { z } from 'zod';

import { spendingSchema } from '../schema';

export interface ISpending {
  id?: string;
  date: Date;
  value: number;
  description?: string;
}

export type ISpendingForm = z.infer<typeof spendingSchema>;

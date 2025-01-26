import { z } from 'zod';
import formatDate from '@/utils/formatDate';

export const defaultValuesSpending = {
  description: '',
  value: 0,
  date: formatDate(new Date(), 'dateInput'),
};

export const schemaSpending = z.object({
  date: z.string(),
  description: z
    .string()
    .max(50, 'A descrição deve conter no máximo 50 caracteres')
    .nullable(),
  value: z.coerce
    .number()
    .min(0.01, 'O valor deve ser igual ou superior a R$ 0,01')
    .max(100000, 'O valor deve ser igual ou inferior a R$ 100.000'),
});

export type spendingT = z.infer<typeof schemaSpending>;

import { z } from 'zod';

export const earningSchema = z.object({
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

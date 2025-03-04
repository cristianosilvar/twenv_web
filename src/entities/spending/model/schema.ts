import { z } from 'zod';

export const spendingSchema = z.object({
  date: z.string({ required_error: 'Campo obrigatório' }),
  description: z
    .string()
    .max(50, 'A descrição deve conter no máximo 50 caracteres')
    .nullable()
    .optional(),
  value: z.coerce
    .number({ required_error: 'Campo obrigatório' })
    .min(0.01, 'O valor deve ser igual ou superior a R$ 0,01')
    .max(100000, 'O valor deve ser igual ou inferior a R$ 100.000'),
});

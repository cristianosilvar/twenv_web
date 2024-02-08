import { z } from 'zod'

export const schemaSpending = z.object({
  description: z.string(),
  date: z.string(),
  value: z.coerce.number().min(0.01, 'O valor deve ser igual ou superior a 1'),
})

export type spendingT = z.infer<typeof schemaSpending>

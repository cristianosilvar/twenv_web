import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string(),
  password: z.string().min(6, 'A senha deve conter no mínimo 6 caracteres.'),
});

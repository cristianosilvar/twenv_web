import { z } from 'zod';

export const userSchema = z.object({
  username: z
    .string()
    .min(3, 'O nome de usuário deve conter no mínimo 3 caracteres.'),
  email: z.string(),
  password: z.string().min(6, 'A senha deve conter no mínimo 3 caracteres.'),
});

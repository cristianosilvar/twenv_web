import { z } from 'zod';

const PASSWORD_MIN_CHARACTER_LENGTH = 6;

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'Campo obrigatório' })
    .email('Informe um e-mail válido'),
  password: z
    .string({ required_error: 'Campo obrigatório' })
    .min(
      PASSWORD_MIN_CHARACTER_LENGTH,
      `A senha deve conter no mínimo ${PASSWORD_MIN_CHARACTER_LENGTH} caracteres.`,
    ),
});

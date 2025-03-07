import { z } from 'zod';

const PASSWORD_MIN_CHARACTER_LENGTH = 6;
const USERNAME_MIN_CHARACTER_LENGTH = 3;

export const signUpSchema = z.object({
  username: z
    .string({ required_error: 'Campo obrigatório' })
    .min(
      USERNAME_MIN_CHARACTER_LENGTH,
      `O nome de usuário deve conter no mínimo ${USERNAME_MIN_CHARACTER_LENGTH} caracteres.`,
    ),
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

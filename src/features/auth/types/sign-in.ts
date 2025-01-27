import { z } from 'zod';

import { signInSchema } from '../schemas';

export type ISignInForm = z.infer<typeof signInSchema>;

import type { z } from 'zod';

import type { signInSchema } from '../schemas';

export type ISignInForm = z.infer<typeof signInSchema>;

import type { z } from 'zod';

import type { userSchema } from '../schemas';

export type IUserForm = z.infer<typeof userSchema>;

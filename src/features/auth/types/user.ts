import { z } from 'zod';

import { userSchema } from '../schemas';

export type IUserForm = z.infer<typeof userSchema>;

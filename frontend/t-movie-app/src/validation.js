// frontend/src/validation.js
import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().nonnegative(),
  name: z.string().min(1),
  email: z.string().email(),
});

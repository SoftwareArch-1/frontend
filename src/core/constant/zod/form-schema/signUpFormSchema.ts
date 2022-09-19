import { z } from 'zod'

import { passwordSchema } from '../passwordSchema'

export const signUpFormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: passwordSchema,
  confirmPassword: passwordSchema,
})

import { z } from 'zod'
import { emailSchema } from '../emailSchema'

import { passwordSchema } from '../passwordSchema'

export const signUpFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
})

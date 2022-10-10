import { z } from 'zod'
import { emailSchema } from '../emailSchema'

import { passwordSchema } from '../passwordSchema'
import { requireStringSchema } from '../requireStringSchema'
import { dateSchema } from '../zodDateSchema'

export const signUpFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
  name: requireStringSchema,
  surname: requireStringSchema,
  birthDate: dateSchema,
})

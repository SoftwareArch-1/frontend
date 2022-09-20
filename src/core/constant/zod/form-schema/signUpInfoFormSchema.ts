import { z } from 'zod'

import { requireStringSchema } from '../requireStringSchema'
import { dateSchema } from '../zodDateSchema'

export const signUpInfoFormSchema = z.object({
  name: requireStringSchema,
  surname: requireStringSchema,
  birthday: dateSchema,
})

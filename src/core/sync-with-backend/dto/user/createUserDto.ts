import { z } from 'zod'
import { emailSchema } from '../../../constant/zod/emailSchema'
import { passwordSchema } from '../../../constant/zod/passwordSchema'
import { requireStringSchema } from '../../../constant/zod/requireStringSchema'
import { dateSchema } from '../../../constant/zod/zodDateSchema'

export const createUserDtoSchema = z.object({
  email: emailSchema,
  name: requireStringSchema,
  surname: requireStringSchema,
  password: passwordSchema,
  birthDate: dateSchema,
})

export type CreateUserDto = z.infer<typeof createUserDtoSchema>

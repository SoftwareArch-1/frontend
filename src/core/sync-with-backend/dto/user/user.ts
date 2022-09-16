import { z } from 'zod'

import { dateSchema } from '../../../constant/zodDateSchema'

export const userDtoSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  surname: z.string(),
  birthday: dateSchema,
})

export type User = z.infer<typeof userDtoSchema>

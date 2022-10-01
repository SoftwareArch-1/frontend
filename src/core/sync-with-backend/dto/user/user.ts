import { z } from 'zod'

import { dateSchema } from '../../../constant/zod/zodDateSchema'

export const userDtoSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  surname: z.string(),
  birthday: dateSchema,
  detail: z.string(),
})

export type User = z.infer<typeof userDtoSchema>

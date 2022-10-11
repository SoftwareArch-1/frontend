import { z } from 'zod'

import { dateSchema } from '../../../constant/zod/zodDateSchema'

export const userDtoSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  surname: z.string(),
  birthDate: dateSchema,
  description: z.string().nullish(),
  discord: z.string().nullish(),
  line: z.string().nullish(),
})

export type User = z.infer<typeof userDtoSchema>

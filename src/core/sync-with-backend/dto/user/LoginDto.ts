import { nullable, z } from 'zod'

import { userDtoSchema } from './user'

export const LoginDtoSchema = z.object({
  user: z.object({
    profile: userDtoSchema,
  }),
  access_token: z.string(),
})

export type LoginDto = z.infer<typeof LoginDtoSchema>

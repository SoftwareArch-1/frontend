import { z } from 'zod'

export const createUserDtoSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  surname: z.string(),
  password: z.string(),
})

export type CreateUserDto = z.infer<typeof createUserDtoSchema>

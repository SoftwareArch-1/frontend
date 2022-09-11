import { z } from 'zod'

export const userDtoSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  surname: z.string(),
})

export type User = z.infer<typeof userDtoSchema>

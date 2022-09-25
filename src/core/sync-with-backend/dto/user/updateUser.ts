import { z } from 'zod'

export const updateUserDtoSchema = z
  .object({
    interest: z.string().array(),
    detail: z.string(),
  })
  .partial()

export type updateUserDto = z.infer<typeof updateUserDtoSchema>

import { z } from 'zod'

export const updateUserDtoSchema = z
  .object({
    detail: z.string(),
  })
  .partial()

export type updateUserDto = z.infer<typeof updateUserDtoSchema>

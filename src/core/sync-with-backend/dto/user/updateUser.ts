import { z } from 'zod'
import { userDtoSchema } from './user'

export const updateUserDtoSchema = userDtoSchema.omit({ id: true }).partial()

export type updateUserDto = z.infer<typeof updateUserDtoSchema>

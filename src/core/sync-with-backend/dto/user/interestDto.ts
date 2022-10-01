import { z } from 'zod'
import { interestSchema } from '../../../constant/zod/interestSchema'

export const interestDtoSchema = z.object({
  interests: interestSchema.array(),
})

export type interestDto = z.infer<typeof interestDtoSchema>

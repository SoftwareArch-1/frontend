import { z } from 'zod'
import { requireStringSchema } from '../../../constant/zod/requireStringSchema'

export const PendingDtoSchema = z.object({
  id: z.string(),
  name: requireStringSchema,
  description: z.union([z.string(), z.undefined()]),
})

export type PendingDto = z.infer<typeof PendingDtoSchema>

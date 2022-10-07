import { z } from 'zod'
import { requireStringSchema } from '../../../constant/zod/requireStringSchema'

export const ParticipantDtoSchema = z.object({
  id: z.string().uuid(),
  name: requireStringSchema,
  description: z.union([z.string(), z.undefined()]),
  line: z.union([z.string(), z.undefined()]),
  discord: z.union([z.string(), z.undefined()]),
})

export type ParticipantDto = z.infer<typeof ParticipantDtoSchema>

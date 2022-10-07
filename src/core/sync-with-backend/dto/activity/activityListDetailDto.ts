import { z } from 'zod'
import { requireStringSchema } from '../../../constant/zod/requireStringSchema'
import { dateSchema } from '../../../constant/zod/zodDateSchema'

export const activityListDetailDtoSchema = z.object({
  id: requireStringSchema,
  title: requireStringSchema,
  tag: requireStringSchema,
  description: requireStringSchema,
  currentParticipant: z.number(),
  maxParticipant: z.number(),
  date: dateSchema,
  location: z.union([z.string(), z.undefined()]),
})

export type activityListDetailDto = z.infer<typeof activityListDetailDtoSchema>

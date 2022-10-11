import * as z from 'zod'
import { dateSchema } from '../../../../constant/zod/zodDateSchema'

export const CreateActivityModel = z.object({
  name: z.string(),
  description: z.string(),
  ownerId: z.string(),
  targetDate: dateSchema,
  maxParticipants: z.number().int(),
  requireLine: z.boolean(),
  requireDiscord: z.boolean(),
  tag: z.string(),
  location: z.string().nullish(),
})

export type CreateActivityType = z.infer<typeof CreateActivityModel>
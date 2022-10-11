import { number, z } from 'zod'

export const createActivityFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  ownerId: z.string(),
  targetDate: z.string(),
  maxParticipants: z.preprocess((v) => {
    return Number(v)
  },z.number().int()),
  requireLine: z.boolean(),
  requireDiscord: z.boolean(),
  tag: z.string(),
  location: z.string().nullable(),
})

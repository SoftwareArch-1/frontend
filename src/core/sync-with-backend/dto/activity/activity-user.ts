import { z } from 'zod'

export const activityUser = z.object({
  id: z.string(),
  name: z.string(),
  // description: z.string().nullable(),
  // lineId: z.string().nullable(),
  // discordId: z.string().nullable(),
  description: z.union([z.string(), z.undefined()]),
  lineId: z.union([z.string(), z.undefined()]),
  discordId: z.union([z.string(), z.undefined()]),
})

export type ActivityUser = z.infer<typeof activityUser>

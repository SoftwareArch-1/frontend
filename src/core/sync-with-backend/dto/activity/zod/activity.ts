import * as z from 'zod'

import { dateSchema } from '../../../../constant/zod/zodDateSchema'

export const ActivityModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  ownerId: z.string(),
  targetDate: dateSchema,
  maxParticipants: z.number().int(),
  requireLine: z.boolean(),
  requireDiscord: z.boolean(),
  tag: z.string(),
  location: z.string().nullish(),
  joinedUserIds: z.string().array(),
  pendingUserIds: z.string().array(),
});

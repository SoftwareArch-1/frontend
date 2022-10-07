import { z } from 'zod'

import { activityUser } from '../activity-user'
import { ActivityModel } from '../zod'

const base = ActivityModel.omit({
  pendingUserIds: true,
  joinedUserIds: true,
}).extend({
  ownerName: z.string(),
  joinedUsers: activityUser.array(),
  isOwner: z.boolean(), // tells if the request comes from the owner of the activity or not
})

export const findOneByOwner = base.extend({
  pendingUsers: activityUser.array(),
})

export const findOneByNotOwner = base

export type FindOneByOwner = z.infer<typeof findOneByOwner>

export type FindOneByNotOwner = z.infer<typeof findOneByNotOwner>

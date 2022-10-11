import { z } from 'zod'

import { activityUser } from '../activity-user'
import { ActivityModel } from '../zod'

const base = ActivityModel.omit({
  pendingUserIds: true,
  joinedUserIds: true,
}).extend({
  ownerName: z.string(),
  joinedUsers: activityUser.array(),
  status: z.enum(['pending', 'joined', 'owned', 'not-joined']),
})

export const ActivityStatus = base.shape.status.enum

export const findOneByOwner = base.extend({
  pendingUsers: activityUser.array(),
})

export const findOneByNotOwner = base

export type FindOneByOwner = z.infer<typeof findOneByOwner>

export type FindOneByNotOwner = z.infer<typeof findOneByNotOwner>

// const base = ActivityModel.omit({
//   pendingUserIds: true,
//   joinedUserIds: true,
// }).extend({
//   ownerName: z.string(),
//   joinedUsers: activityUser.array(),
//   isOwner: z.boolean(), // tells if the request comes from the owner of the activity or not
//   isJoin: z.boolean(),
//   pendingUsers: activityUser.array().nullish(),
// })

export const findOneActivity = ActivityModel.omit({
  pendingUserIds: true,
}).extend({
  ownerName: z.string(),
  joinedUsers: activityUser.array(),
  isOwner: z.boolean(), // tells if the request comes from the owner of the activity or not
  pendingUsers: activityUser.array().nullish(),
})

export type FindOneActivity = z.infer<typeof findOneActivity>

// export const findOneByOwner = base.extend({
//   pendingUsers: activityUser.array(),
// })

// export const findOneByNotOwner = base

// export type FindOneByOwner = z.infer<typeof findOneByOwner>

// export type FindOneByNotOwner = z.infer<typeof findOneByNotOwner>

import { z } from 'zod'
import { ActivityModel } from '../zod'

export const eachInAll = ActivityModel.omit({
  pendingUserIds: true,
  ownerId: true,
  requireLine: true,
  requireDiscord: true,
})

export const findAllActivitiesDto = eachInAll.array()

export const findAllMyActivitiesDto = z.object({
  createdActivities: findAllActivitiesDto,
  joinedActivities: findAllActivitiesDto,
})

export type findAllMyActivitie = z.infer<typeof findAllMyActivitiesDto>

export type EachActvity = z.infer<typeof eachInAll>

export const findAllActivityDto = ActivityModel.array()

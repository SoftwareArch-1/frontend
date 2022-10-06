import { z } from 'zod'
import { activityListDetailDtoSchema } from './activityListDetailDto'

export const myActivityListDtoSchema = z.object({
  createdActivities: activityListDetailDtoSchema.array(),
  joinedActivities: activityListDetailDtoSchema.array(),
})

export type myActivityListDto = z.infer<typeof myActivityListDtoSchema>

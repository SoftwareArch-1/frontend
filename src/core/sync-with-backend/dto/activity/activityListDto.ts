import { z } from 'zod'
import { activityListDetailDtoSchema } from './activityListDetailDto'

export const activityListDtoSchema = z.object({
  activities: activityListDetailDtoSchema.array(),
})

export type activityListDto = z.infer<typeof activityListDtoSchema>

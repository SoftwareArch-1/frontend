import { z } from 'zod'

export const updateParticipantDtoSchema = z.object({
  activityId: z.string(),
  userId: z.string(),
  accept: z.boolean(),
})

export type updateParticipantDto = z.infer<typeof updateParticipantDtoSchema>

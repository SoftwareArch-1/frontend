import { z } from 'zod'

export const updateParticipantDtoSchema = z.object({
  activityId: z.string(),
  joinerId: z.string(),
})

export type updateParticipantDto = z.infer<typeof updateParticipantDtoSchema>

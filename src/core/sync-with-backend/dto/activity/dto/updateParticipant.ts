import { z } from 'zod'

export const acceptParticipantDtoSchema = z.object({
  joinedUserIds: z.preprocess((val) => val ?? [], z.array(z.string())),
  pendingUserIds: z.preprocess((val) => val ?? [], z.array(z.string())),
})

export const rejectParticipantDtoSchema = acceptParticipantDtoSchema.omit({
  joinedUserIds: true,
})

export type AcceptParticipantDto = z.infer<typeof acceptParticipantDtoSchema>

export type RejectParticipantDto = z.infer<typeof rejectParticipantDtoSchema>

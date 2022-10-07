import { z } from 'zod'
import { requireStringSchema } from '../../../constant/zod/requireStringSchema'
import { dateSchema } from '../../../constant/zod/zodDateSchema'
import { activityListDetailDtoSchema } from './activityListDetailDto'
import { ParticipantDtoSchema } from './participantDto'
import { PendingDtoSchema } from './pendingDto'

export const activityDetailDtoSchema = z.object({
  ownerName: requireStringSchema,
  title: requireStringSchema,
  currentParticipant: z.number(),
  maxParticipant: z.number(),
  date: dateSchema,
  tag: requireStringSchema,
  description: requireStringSchema,
  status: requireStringSchema,
  location: z.union([z.string(), z.undefined()]),
  participant: ParticipantDtoSchema.array(),
  pending: z.union([PendingDtoSchema.array(), z.undefined()]),
})

export type activityDetailDto = z.infer<typeof activityDetailDtoSchema>

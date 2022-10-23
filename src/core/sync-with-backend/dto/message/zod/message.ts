import { z } from 'zod'
import { dateSchema } from '../../../../constant/zod/zodDateSchema'

export const MessageModel = z.object({
  id: z.string(),
  content: z.string(),
  likes: z.number().int(),
  createdAt: dateSchema,
  // name: z.string(),
  // userId: z.string(),
})

export type Message = z.infer<typeof MessageModel>

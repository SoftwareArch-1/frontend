import { z } from 'zod'
import { chatMessageSchema } from '../../../../../message/socket/socket.type'

export const initialDataDto = chatMessageSchema.array()

export type InitialData = z.infer<typeof initialDataDto>

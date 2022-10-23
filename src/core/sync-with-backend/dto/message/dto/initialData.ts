import { z } from 'zod'
import { MessageModel } from '../zod/message'

export const initialDataDto = MessageModel.array()

export type InitialData = z.infer<typeof initialDataDto>

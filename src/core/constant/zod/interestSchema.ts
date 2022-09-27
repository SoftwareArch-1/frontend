import { z } from 'zod'

export const interestSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type interestSchemaType = z.infer<typeof interestSchema>

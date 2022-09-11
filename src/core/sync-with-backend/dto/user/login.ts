import { z } from 'zod'

export const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type LoginCredentials = z.infer<typeof credentialsSchema>

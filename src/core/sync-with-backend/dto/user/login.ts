import { z } from 'zod'

import { emailSchema } from '../../../constant/zod/emailSchema'
import { passwordSchema } from '../../../constant/zod/passwordSchema'

export const credentialsSchema = z.object({
  username: emailSchema,
  password: passwordSchema,
})

export type LoginCredentials = z.infer<typeof credentialsSchema>

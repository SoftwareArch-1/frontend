import { z } from 'zod'

export const passwordSchema = z
  .string({
    invalid_type_error: 'must be a string',
  })
  .min(8, 'must be at least 8 characters')

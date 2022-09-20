import { z } from 'zod'

export const requireStringSchema = z
  .string({
    invalid_type_error: 'must be a string',
  })
  .min(1, 'require')

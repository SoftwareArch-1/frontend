import { z } from 'zod'

/**
 * @see https://zod.dev/?id=dates -> Supporting date strings
 */
export const dateSchema = z.preprocess((arg) => {
  if (typeof arg == 'string' || arg instanceof Date) return new Date(arg)
}, z.date())
export type DateSchema = z.infer<typeof dateSchema>

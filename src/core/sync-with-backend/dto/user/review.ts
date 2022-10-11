import { z } from 'zod'

export const reviewSchema = z.object({
  content: z.string(),
  stars: z.number().int(),
  revieweeId: z.string(),
})

export type ReviewsType = z.infer<typeof reviewSchema>

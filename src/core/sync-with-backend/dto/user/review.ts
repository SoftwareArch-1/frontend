import { z } from 'zod'

export const reviewSchema = z.object({
  content: z.string().max(500),
  stars: z.number().int().min(1).max(5),
  revieweeId: z.string(),
})

export type ReviewsType = z.infer<typeof reviewSchema>

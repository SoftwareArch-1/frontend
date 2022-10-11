import { z } from 'zod'

export const profileSchema = z.object({
  profile: z.object({
    name: z.string(),
    surname: z.string(),
    email: z.string().email(),
    id: z.string(),
  }),
  reviews: z.array(
    z.object({
      content: z.string(),
      id: z.string(),
      stars: z.number().int().min(1).max(5),
      reviewer: z.object({
        name: z.string(),
        surname: z.string(),
      }),
    }),
  ),
  stars: z.object({
    1: z.number().int().min(0),
    2: z.number().int().min(0),
    3: z.number().int().min(0),
    4: z.number().int().min(0),
    5: z.number().int().min(0),
  }),
})

export type ProfileType = z.infer<typeof profileSchema>
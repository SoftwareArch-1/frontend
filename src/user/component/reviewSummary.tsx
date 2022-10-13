import dayjs from 'dayjs'
import shallow from 'zustand/shallow'
import { FillUpBar } from '../../core/components/FillUpBar'
import { useUserStore } from '../userStore'

export const ReviewSummary = (reviewsProps: {
  fiveStar: number
  fourStar: number
  threeStar: number
  twoStar: number
  oneStar: number
}) => {
  const totalReviews =
    reviewsProps.fiveStar +
    reviewsProps.fourStar +
    reviewsProps.threeStar +
    reviewsProps.twoStar +
    reviewsProps.oneStar
  const totalStars =
    reviewsProps.fiveStar * 5 +
    reviewsProps.fourStar * 4 +
    reviewsProps.threeStar * 3 +
    reviewsProps.twoStar * 2 +
    reviewsProps.oneStar
  return (
    <section className="w-100 relative flex h-[127px] flex-row items-center justify-center rounded-lg bg-white p-6 drop-shadow-md">
      <div className="pl-7 text-4xl">
        <b>
          {totalReviews === 0 ? '0.0' : (totalStars / totalReviews).toFixed(1)}
        </b>
      </div>
      <ul className="relative inset-y-1 flex flex-col gap-2 pl-9">
        <FillUpBar
          label="5"
          value={(reviewsProps.fiveStar / totalReviews) * 100}
        />
        <FillUpBar
          label="4"
          value={(reviewsProps.fourStar / totalReviews) * 100}
        />
        <FillUpBar
          label="3"
          value={(reviewsProps.threeStar / totalReviews) * 100}
        />
        <FillUpBar
          label="2"
          value={(reviewsProps.twoStar / totalReviews) * 100}
        />
        <FillUpBar
          label="1"
          value={(reviewsProps.oneStar / totalReviews) * 100}
        />
      </ul>
    </section>
  )
}

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
  //const totalReviews = reviewsProps.fiveStar + reviewsProps.fourStar + reviewsProps.threeStar + reviewsProps.twoStar + reviewsProps.oneStar
  return (
    <section className="w-100 relative flex h-[127px] flex-row items-center justify-center rounded-lg bg-white p-6 drop-shadow-md">
        <div className="pl-7 text-4xl">
          <b>4.0</b>
        </div>
        <ul className="flex flex-col gap-2 pl-9 relative inset-y-1">
          <FillUpBar label="5" value={reviewsProps.fiveStar ?? '50'} />
          <FillUpBar label="4" value={reviewsProps.fourStar ?? '40'} />
          <FillUpBar label="3" value={reviewsProps.threeStar ?? '30'} />
          <FillUpBar label="2" value={reviewsProps.twoStar ?? '20'} />
          <FillUpBar label="1" value={reviewsProps.oneStar ?? '5'} />
        </ul>
    </section>
  )
}

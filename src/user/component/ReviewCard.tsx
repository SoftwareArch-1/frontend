import dayjs from 'dayjs'
import shallow from 'zustand/shallow'
import { FillUpBar } from '../../core/components/FillUpBar'
import { IconifyIcon } from '../../core/components/IconifyIcon'
import { useUserStore } from '../userStore'

export const ReviewCard = (reviewCardProps: {
  stars: number
  description: string
  reviewDate: Date
}) => {
  return (
    <section className="w-full flex min-h-[87px] flex-col rounded-lg bg-slate-500 px-3 py-3 drop-shadow-md">
      <div className="flex w-full items-center justify-between text-xs">
        <div className="flex gap-x-0">
          <IconifyIcon
            icon="starSolid"
            className="min-h-[12px] min-w-[12px] text-sky-500"
          />
          {reviewCardProps.stars >= 2 ? (
            <IconifyIcon
              icon="starSolid"
              className="min-h-[12px] min-w-[12px] text-sky-500"
            />
          ) : (
            <IconifyIcon
              icon="starOultine"
              className="min-h-[12px] min-w-[12px] text-sky-500"
            />
          )}
          {reviewCardProps.stars >= 3 ? (
            <IconifyIcon
              icon="starSolid"
              className="min-h-[12px] min-w-[12px] text-sky-500"
            />
          ) : (
            <IconifyIcon
              icon="starOultine"
              className="min-h-[12px] min-w-[12px] text-sky-500"
            />
          )}
          {reviewCardProps.stars >= 4 ? (
            <IconifyIcon
              icon="starSolid"
              className="min-h-[12px] min-w-[12px] text-sky-500"
            />
          ) : (
            <IconifyIcon
              icon="starOultine"
              className="min-h-[12px] min-w-[12px] text-sky-500"
            />
          )}
          {reviewCardProps.stars >= 5 ? (
            <IconifyIcon
              icon="starSolid"
              className="min-h-[12px] min-w-[12px] text-sky-500"
            />
          ) : (
            <IconifyIcon
              icon="starOultine"
              className="min-h-[12px] min-w-[12px] text-sky-500"
            />
          )}
        </div>
        <div className=" text-slate-300">
          {('0' + reviewCardProps.reviewDate.getDate()).slice(-2) +
            '/' +
            ('0' + (reviewCardProps.reviewDate.getMonth() + 1)).slice(-2) +
            '/' +
            reviewCardProps.reviewDate.getFullYear()}
        </div>
      </div>
      <p className="break-all text-sm text-white">
        {reviewCardProps.description}
      </p>
    </section>
  )
}

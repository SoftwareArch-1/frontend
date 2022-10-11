import classNames from 'classnames'
import { MouseEventHandler } from 'react'
import { IconifyIcon } from '../../core/components/IconifyIcon'
import { getTagColor } from '../constant/activityTagColor'

interface ActivityCardProp {
  tag: string
  title: string
  description: string
  maxParticipant: number
  currentParticipant: number
  location?: string | null
  date: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

const ActivityCard = ({
  tag,
  title,
  description,
  maxParticipant,
  currentParticipant,
  location,
  date,
  onClick,
}: ActivityCardProp) => {
  return (
    <div
      className="flex w-full overflow-hidden rounded-[10px] shadow-md"
      onClick={onClick}
    >
      <div
        className={classNames(
          'flex w-[40px] items-center justify-center bg-orange-500',
          getTagColor(tag)
        )}
      >
        <p className="-rotate-90 text-white">{tag}</p>
      </div>
      <div className="flex w-full flex-col gap-y-[10px] overflow-hidden bg-white px-[15px] py-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div>{title}</div>
            <div className="flex items-center gap-x-[5px] text-xs text-slate-500">
              <IconifyIcon icon="calendar-month" />
              <p>{date}</p>
            </div>
          </div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs  text-slate-500">
            {description}
          </div>
        </div>
        <div className="flex gap-x-5">
          <div className="flex items-center gap-x-[5px] text-xs text-slate-500">
            <IconifyIcon icon="account" />
            <p>
              {currentParticipant} / {maxParticipant}
            </p>
          </div>
          {location && (
            <div className="flex items-center gap-x-[5px] text-xs text-slate-500">
              <IconifyIcon icon="map-marker" />
              <p>{location}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ActivityCard

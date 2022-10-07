import { MouseEventHandler } from 'react'
import ButtonLong from '../../core/components/ButtonLong'
import { IconifyIcon } from '../../core/components/IconifyIcon'
import InterestTag from '../../core/components/InterestTag'

interface ActivityCardDetailProps {
  name: string
  title: string
  currentParticipant: number
  maxParticipant: number
  date: string
  tag: string
  description: string
  location?: string
  buttonText: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const ActivityDetailCard = ({
  name,
  title,
  currentParticipant,
  maxParticipant,
  date,
  tag,
  description,
  location,
  buttonText,
  onClick,
}: ActivityCardDetailProps) => {
  return (
    <div className="w-full rounded-[10px] bg-white px-2.5 py-2.5 shadow-md">
      <div className="flex h-[160px]">
        <div className="flex w-2/5 flex-col items-center justify-center gap-y-[5px]">
          <img
            src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            className="aspect-square h-1/2 max-h-[250px] max-w-[250px] rounded-full object-cover"
          />
          <p>{name}</p>
        </div>
        <div className="flex w-3/5 flex-col items-center justify-center gap-y-[15px]">
          <div>{title}</div>
          <div className="flex items-center justify-center gap-x-2.5">
            <div className="flex items-center justify-center gap-x-[5px]">
              <IconifyIcon icon="account" className="text-slate-500" />
              <p>
                {currentParticipant}/{maxParticipant}
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-[5px]">
              <IconifyIcon icon="calendar-month" className="text-slate-500" />
              <p>{date}</p>
            </div>
          </div>
          <InterestTag name={tag} />
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <textarea
          className="block w-full resize-y rounded-[10px] border-none bg-slate-200 p-2.5 text-sm"
          rows={5}
          disabled
          value={description}
        />
        {location && (
          <input
            disabled
            value={location}
            className="block w-full rounded-[10px] border-none bg-slate-200 p-2.5 text-sm"
          />
        )}
      </div>
      <div className="h-[40px]"></div>
      <div className="flex items-center justify-center">
        <ButtonLong onClick={onClick} text={buttonText} />
      </div>
    </div>
  )
}

export default ActivityDetailCard

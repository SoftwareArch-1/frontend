import { MouseEventHandler } from 'react'
import { IconifyIcon } from '../../core/components/IconifyIcon'

interface ParticipantCardProps {
  id: string
  name: string
  description?: string | null
  line?: string | null
  discord?: string | null
  onClick?: MouseEventHandler<HTMLDivElement>
}

const ParticipantCard = ({
  id,
  name,
  description,
  line,
  discord,
  onClick,
}: ParticipantCardProps) => {
  return (
    <div
      className="flex h-[80px] w-full overflow-hidden rounded-[10px] shadow-md"
      onClick={onClick}
    >
      <div className="flex w-[40px] items-center justify-center bg-sky-500" />
      <div className="flex flex-1 flex-col justify-center gap-y-2 overflow-hidden bg-white px-2.5 py-[22px]">
        <div className="flex flex-col">
          <div className="text-base">{name}</div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs  text-slate-500">
            {description}
          </div>
        </div>
        <div className="flex gap-x-5">
          {line && (
            <div className="flex items-center gap-x-[5px] text-xs text-slate-500">
              <IconifyIcon icon="line" className="text-[#00B900]" />
              <p>{line}</p>
            </div>
          )}
          {discord && (
            <div className="flex items-center gap-x-[5px] text-xs text-slate-500">
              <IconifyIcon icon="discord" className="text-[#7289d9]" />
              <p>{discord}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ParticipantCard

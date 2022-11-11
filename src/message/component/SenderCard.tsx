import dayjs from 'dayjs'
import { IconifyIcon } from '../../core/components/IconifyIcon'

export const SenderCard = (senderCardProps: {
  id: string
  description: string
  sendDate: Date
  likes: number
}) => {
  return (
    <div className="flex min-h-[87px] w-full flex-col rounded-lg bg-slate-500 px-3 py-3 text-white drop-shadow-md">
      <div className="flex w-full items-center justify-between text-xs">
        <div className="flex gap-x-0">{'Me'}</div>
        <div>
          {dayjs(senderCardProps.sendDate).format('DD/MM/YYYY - HH:mm')}
        </div>
      </div>
      <div className="break-all text-sm">{senderCardProps.description}</div>
      <div className="flex w-full justify-end gap-x-1 self-center pt-3 text-xs">
        <IconifyIcon
          icon="heartSolid"
          className="min-h-[16px] min-w-[16px] text-red-500"
        />
        <p>{senderCardProps.likes}</p>
      </div>
    </div>
  )
}

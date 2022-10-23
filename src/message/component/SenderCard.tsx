import dayjs from "dayjs"
import { IconifyIcon } from "../../core/components/IconifyIcon"

export const SenderCard = (senderCardProps: {
  description: string
  sendDate: Date
  likes: number
}) => {
  return (
    <div className="w-full flex min-h-[87px] flex-col rounded-lg bg-slate-500 px-3 py-3 drop-shadow-md text-white">
      <div className="flex w-full items-center justify-between text-xs">
        <div className="flex gap-x-0">
          {'Me'}
        </div>
        <div>
            {dayjs(senderCardProps.sendDate).format(
              "DD/MM/YYYY - HH:mm" 
            )}
        </div>
      </div>
      <div className="break-all text-sm">
            {senderCardProps.description}
      </div>
      <div className="flex w-full justify-end pt-3 self-center text-xs gap-x-1">
          <IconifyIcon
              icon="heartSolid"
              className="min-h-[16px] min-w-[16px] text-red-500"
            />
            <p>{senderCardProps.likes}</p>
      </div>
      
    </div>
  )
}

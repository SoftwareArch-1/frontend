import dayjs from "dayjs"

export const SenderCard = (senderCardProps: {
  description: string
  sendDate: Date
}) => {
  return (
    <div className="w-full flex min-h-[87px] flex-col rounded-lg bg-slate-500 px-3 py-3 drop-shadow-md">
      <div className="flex w-full items-center justify-between text-xs">
        <div className="flex gap-x-0 text-white">
          {'Me'}
        </div>
        <div className=" text-white">
            {dayjs(senderCardProps.sendDate).format(
              "DD/MM/YYYY - HH:mm" 
            )}
        </div>
      </div>
      <div className="break-all text-sm text-white">
            {senderCardProps.description}
      </div>
    </div>
  )
}

export const SenderCard = (messageCardProps: {
  description: string
  sendDate: Date
}) => {
  return (
    <section className="w-100 flex min-h-fit flex-col justify-center rounded-lg bg-slate-500 drop-shadow-md">
      <div className="flex w-full items-center justify-between px-3 pt-3 text-xs">
        <div className="flex gap-x-0 text-white">
          {'Me'}
        </div>
        <div className=" text-white">
        {('0' + messageCardProps.sendDate.getDate()).slice(-2) +
            '/' +
            ('0' + (messageCardProps.sendDate.getMonth() + 1)).slice(-2) +
            '/' +
            messageCardProps.sendDate.getFullYear() + ' - ' +
            ('0' + (messageCardProps.sendDate.getHours() + 1)).slice(-2) + ':' +
            ('0' + (messageCardProps.sendDate.getMinutes() + 1)).slice(-2)
            }
        </div>
      </div>
      <div className="flex w-fiull h-auto items-center justify-between whitespace-pre-wrap break-all px-3 pb-8 text-sm text-white">
        {messageCardProps.description}
      </div>
    </section>
  )
}

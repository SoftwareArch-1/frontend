import { IconifyIcon } from '../../core/components/IconifyIcon'

interface RequestCardProps {
  name: string
  detail?: string
  onCancel: () => void
  onConfirm: () => void
}

const RequestCard = ({
  name,
  detail,
  onCancel,
  onConfirm,
}: RequestCardProps) => {
  return (
    <div className="flex h-[80px] w-full overflow-hidden rounded-[10px] shadow-md">
      <div className="flex w-[40px] items-center justify-center bg-slate-200"></div>
      <div className="flex flex-1 flex-col justify-center gap-y-2.5 overflow-hidden bg-white px-2.5 py-[22px]">
        <div className="flex flex-col">
          <div className="text-base">{name}</div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs  text-slate-500">
            {detail}
          </div>
        </div>
      </div>
      <div className="flex w-[112px] items-center justify-center gap-x-2 bg-white py-[22px] px-2">
        <button
          onClick={onCancel}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200"
        >
          <IconifyIcon icon="close" className="h-6 w-6" />
        </button>
        <button
          onClick={onConfirm}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white"
        >
          <IconifyIcon icon="check" className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default RequestCard

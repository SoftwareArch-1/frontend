import dayjs from 'dayjs'
import shallow from 'zustand/shallow'
import { FillUpBar } from '../../core/components/FillUpBar'
import { IconifyIcon } from '../../core/components/IconifyIcon'
import { useUserStore } from '../userStore'

export const ContactCard = (ContactCardProps: {
  line: string
  discord: string
}) => {
  return (
    <section className="flex flex-col w-100 max-h-24 justify-center rounded-lg bg-white drop-shadow-md">
      <div className="flex w-full items-center justify-start text-xs px-6 py-3">
        <div className="flex flex-col pr-2 gap-y-3">
          <IconifyIcon
            icon="lineIcon"
            className="min-h-[16px] text-green-500"
          />
          <IconifyIcon
            icon="discordIcon"
            className="min-h-[16px]"
          />
        </div>
        <div className="flex flex-col text-black gap-y-3">
          <div>
            {ContactCardProps.line}
          </div>
          <div>
            {ContactCardProps.discord}
          </div>
        </div>
      </div>
    </section>
  )
}

import dayjs from 'dayjs'
import { InfoItem } from '../../core/components/InfoItem'

export interface AccountInfoListProps {
  name: string
  surname: string
  email: string
  birthday: Date
}

export const AccountInfoList = ({
  birthday,
  email,
  name,
  surname,
}: AccountInfoListProps) => {
  return (
    <section className="rounded-[10px] bg-white p-4 shadow-md">
      <ul className="flex flex-col gap-4">
        <InfoItem label="Name" value={`${name} ${surname}`} />
        <InfoItem label="Email" value={email} />
        <InfoItem
          label="Day of Birth"
          value={dayjs(birthday).format(
            // ex 01 Jan 2000
            'DD MMM YYYY'
          )}
        />
      </ul>
    </section>
  )
}

import dayjs from 'dayjs'
import shallow from 'zustand/shallow'
import { InfoItem } from '../../core/components/InfoItem'

import { useUserStore } from '../userStore'

export const AccountInfoList = () => {
  const { name, surname, email, birthday } = useUserStore(
    ({ name, surname, email, birthday }) => ({
      name,
      surname,
      email,
      birthday,
    }),
    shallow
  )

  return (
    <section className="bg-white p-4">
      <ul className="flex flex-col gap-4">
        <InfoItem
          label="Name"
          value={name && surname ? `${name} ${surname}` : 'John Doe'}
        />
        <InfoItem label="Email" value={email ?? 'johndoe@example.com'} />
        <InfoItem
          label="Day of Birth"
          value={dayjs(birthday ?? new Date()).format(
            // ex 01 Jan 2000
            'DD MMM YYYY'
          )}
        />
      </ul>
    </section>
  )
}

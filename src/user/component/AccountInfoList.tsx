import { useEffect, useMemo, useState } from 'react'

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
  const [fullName, setFullName] = useState(`${name} ${surname}`)
  const [emailAddress, setEmailAddress] = useState(email)
  const [birthDate, setBirthDate] = useState(birthday)

  useEffect(() => {
    setFullName(`${name} ${surname}`)
    setEmailAddress(email)
    setBirthDate(birthday)
  }, [birthday, email, name, surname])

  return (
    <section className="rounded-[10px] bg-white p-4 shadow-md">
      <ul className="flex flex-col gap-4">
        <InfoItem
          label="Name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <InfoItem
          label="Email"
          type="email"
          onChange={(e) => setEmailAddress(e.target.value)}
          value={emailAddress}
        />
        {/* <InfoItem
          label="Day of Birth"
          type="date"
          onChange={(e) => setBirthDate(new Date(e.target.value))}
          value={birthDate.toISOString().split('T')[0]}
        /> */}
      </ul>
    </section>
  )
}

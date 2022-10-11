import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { InfoItem } from '../../core/components/InfoItem'
import { updateUser } from '../api/update'

export interface AccountInfoListProps {
  name: string
  surname: string
  email: string
  birthday: Date
  discord?: string | null
  line?: string | null
  editable?: boolean
}

export const AccountInfoList = ({
  birthday,
  email,
  name,
  surname,
  discord,
  line,
  editable = false,
}: AccountInfoListProps) => {
  const [fullName, setFullName] = useState(`${name} ${surname}`)
  const [emailAddress, setEmailAddress] = useState(email)
  const [birthDate, setBirthDate] = useState(birthday)
  const [discordId, setDiscord] = useState(discord)
  const [lineId, setLine] = useState(line)

  useEffect(() => {
    setFullName(`${name} ${surname}`)
    setEmailAddress(email)
    setBirthDate(birthday)
  }, [birthday, email, name, surname])

  const { mutate: updateUserMutate } = useMutation(updateUser)

  return (
    <section className="rounded-[10px] bg-white p-4 shadow-md">
      <ul className="flex flex-col gap-4">
        <InfoItem
          label="Name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          onSave={() => {
            const [name, surname] = fullName.split(' ')
            updateUserMutate({ name, surname })
          }}
          editable={editable}
        />
        <InfoItem
          label="Email"
          type="email"
          onChange={(e) => setEmailAddress(e.target.value)}
          value={emailAddress}
          onSave={() => updateUserMutate({ email: emailAddress })}
          editable={editable}
        />
        <InfoItem
          label="Day of Birth"
          type="date"
          onChange={(e) => setBirthDate(new Date(e.target.value))}
          value={birthDate.toISOString().split('T')[0]}
          onSave={() => updateUserMutate({ birthDate })}
          editable={editable}
        />
        {
          <InfoItem
            label="Discord"
            type="text"
            onChange={(e) => {
              setDiscord(e.target.value)
            }}
            value={discordId ?? ''}
            editable={editable}
            onSave={() => updateUserMutate({ discord: discordId })}
          />
        }
        {
          <InfoItem
            label="Line"
            type="text"
            onChange={(e) => {
              setLine(e.target.value)
            }}
            value={lineId ?? ''}
            editable={editable}
            onSave={() => updateUserMutate({ line: lineId })}
          />
        }
      </ul>
    </section>
  )
}

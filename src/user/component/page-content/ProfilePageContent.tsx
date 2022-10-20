import { AccountInfoList } from '../AccountInfoList'
import { Nav } from '../../../core/components/Nav'
import UserCard from '../UserCard'
import { useUserStore } from '../../userStore'
import shallow from 'zustand/shallow'
import BottomNavigation from '../../../core/components/ButtomNavigation'
import Head from 'next/head'

export const ProfilePageContent = () => {
  const { name, surname, description, birthDate, email, discordId, lineId } =
    useUserStore(
      ({
        name,
        surname,
        description,
        birthDate,
        email,
        discordId,
        lineId,
      }) => ({
        name,
        surname,
        description,
        birthDate,
        email,
        discordId,
        lineId,
      }),
      shallow
    )

  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Nav text="Account" />
      <main className="flex flex-col gap-4 px-5 py-5">
        <UserCard
          name={name ?? 'John'}
          surname={surname ?? 'Doe'}
          detail={description}
          editable={true}
        />
        <AccountInfoList
          name={name ?? 'John'}
          surname={surname ?? 'Doe'}
          email={email ?? 'email@example.com'}
          birthday={birthDate ?? new Date()}
          line={lineId}
          discord={discordId}
          editable={true}
        />
      </main>
      <BottomNavigation />
    </>
  )
}

export default ProfilePageContent

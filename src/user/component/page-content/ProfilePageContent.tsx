import { AccountInfoList } from '../AccountInfoList'
import { Nav } from '../../../core/components/Nav'
import UserCard from '../UserCard'
import { useUserStore } from '../../userStore'
import shallow from 'zustand/shallow'
import FloatingActionButton from '../../../core/components/FloatingActionButton'
import { useRouter } from 'next/router'
import { pagePath } from '../../../core/utils/pagePath'

export const ProfilePageContent = () => {
  const router = useRouter()

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

  console.log(birthDate)

  return (
    <>
      <Nav />
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
        <FloatingActionButton
          className="bg-sky-500"
          onClick={() => {
            router.push(pagePath.ActivityPage())
          }}
        >
          Activity
        </FloatingActionButton>
      </main>
    </>
  )
}

export default ProfilePageContent

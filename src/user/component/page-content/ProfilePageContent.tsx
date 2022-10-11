import { AccountInfoList } from '../AccountInfoList'
import { Nav } from '../../../core/components/Nav'
import UserCard from '../UserCard'
import { useUserStore } from '../../userStore'
import shallow from 'zustand/shallow'

export const ProfilePageContent = () => {
  const { name, surname, description, birthday, email } = useUserStore(
    ({ name, surname, description, birthday, email }) => ({
      name,
      surname,
      description,
      birthday,
      email,
    }),
    shallow
  )

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
          birthday={birthday ?? new Date()}
        />
      </main>
    </>
  )
}

export default ProfilePageContent

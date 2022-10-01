import { AccountInfoList } from '../AccountInfoList'
// import shallow from 'zustand/shallow'
import { Nav } from '../../../core/components/Nav'
import UserCard from '../UserCard'
import { useUserStore } from '../../userStore'
import shallow from 'zustand/shallow'

export const ProfilePageContent = () => {
  const { name, surname, detail } = useUserStore(
    ({ name, surname, detail }) => ({
      name,
      surname,
      detail,
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
          detail={detail}
        />
        <AccountInfoList />
      </main>
    </>
  )
}

export default ProfilePageContent

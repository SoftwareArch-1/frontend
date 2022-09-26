import { AccountInfoList } from '../AccountInfoList'
// import shallow from 'zustand/shallow'
import { Nav } from '../../../core/components/Nav'
import UserCard from '../../../core/components/UserCard'
// import UserCard from '../../../core/components/UserCard'
// import { useUserStore } from '../../userStore'

export const ProfilePageContent = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-4 px-5 py-5">
        <UserCard />
        <AccountInfoList />
      </main>
    </>
  )
}

export default ProfilePageContent

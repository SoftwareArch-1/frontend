import { AccountInfoList } from '../AccountInfoList'
import shallow from 'zustand/shallow'
import { Nav } from '../../../core/components/Nav'
import UserCard from '../../../core/components/UserCard'
import { useUserStore } from '../../userStore'

export const ProfilePageContent = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-4">
        <AccountInfoList />
      </main>
    </>
  )
}

// const ProfilePageContent = () => {
//   const showName = `${name ?? 'John'} ${surname ?? 'Doe'}`

//   return (
//     <>
//       <Nav />
//       <section className="px-5 py-5">
//         <UserCard
//           interest={['sport', 'game', 'food', 'shopping', 'anime']}
//           detail={
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue mi, rhoncus quis pulvinar sed, eleifend ac nulla. Phasellus sed viverra ex, eu luctus est. Ut diam ante, eleifend ac posuere vel, viverra non est. Morbi mollis congue ex efficitur fringilla. Nullam eu pellentesque metus. Curabitur efficitur erat non est.'
//           }
//           name={showName}
//         />
//       </section>
//     </>
//   )
// }

export default ProfilePageContent

import { IconifyIcon } from './IconifyIcon'

const BottomNavigation = () => {
  return (
    <>
      <div className="h-[60px]"></div>
      <div className="fixed bottom-0 flex h-[57px] w-full items-center justify-between bg-white px-[30px]">
        <div className="flex h-full w-[60px] flex-col items-center justify-center text-slate-500">
          <IconifyIcon icon="party" className="h-6 w-6" />
          <p className="text-[10px]">Activities</p>
        </div>
        <div className="flex h-full w-[60px] flex-col items-center justify-center text-slate-500">
          <IconifyIcon icon="account-group" className="h-6 w-6" />
          <p className="text-[10px]">My Activity</p>
        </div>
        <div className="flex h-full w-[60px] flex-col items-center justify-center text-slate-500">
          <IconifyIcon icon="account" className="h-6 w-6" />
          <p className="text-[10px]">Account</p>
        </div>
        <div className="flex h-full w-[60px] flex-col items-center justify-center text-slate-500">
          <IconifyIcon icon="logout" className="h-6 w-6" />
          <p className="text-[10px]">Logout</p>
        </div>
      </div>
    </>
  )
}

export default BottomNavigation

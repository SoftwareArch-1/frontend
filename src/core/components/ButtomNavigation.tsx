import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useUserStore } from '../../user/userStore'
import { axiosInstance } from '../constant/axiosInstance'
import { pagePath } from '../utils/pagePath'
import { IconifyIcon } from './IconifyIcon'

const BottomNavigation = () => {
  const router = useRouter()
  const reset = useUserStore((state) => state.reset)

  return (
    <>
      <div className="h-[60px]"></div>
      <div className="fixed bottom-0 flex h-[57px] w-full items-center justify-between bg-white px-[30px]">
        <div
          className={classNames(
            'flex h-full w-[60px] flex-col items-center justify-center',
            router.pathname === pagePath.ActivityPage() ||
              router.pathname === pagePath.ActivityDetailPage('[id]')
              ? 'font-bold text-sky-500'
              : 'text-slate-500'
          )}
          onClick={() => {
            router.push(pagePath.ActivityPage())
          }}
        >
          <IconifyIcon icon="party" className="h-6 w-6" />
          <p className="text-[10px]">Activities</p>
        </div>
        <div
          className={classNames(
            'flex h-full w-[60px] flex-col items-center justify-center',
            router.pathname === pagePath.MyActivityPage()
              ? 'font-bold text-sky-500'
              : 'text-slate-500'
          )}
          onClick={() => {
            router.push(pagePath.MyActivityPage())
          }}
        >
          <IconifyIcon icon="account-group" className="h-6 w-6" />
          <p className="text-[10px]">My Activity</p>
        </div>
        <div
          className={classNames(
            'flex h-full w-[60px] flex-col items-center justify-center',
            router.pathname === pagePath.ProfilePage()
              ? 'font-bold text-sky-500'
              : 'text-slate-500'
          )}
          onClick={() => {
            router.push(pagePath.ProfilePage())
          }}
        >
          <IconifyIcon icon="account" className="h-6 w-6" />
          <p className="text-[10px]">Account</p>
        </div>
        <div
          className="flex h-full w-[60px] flex-col items-center justify-center text-slate-500"
          onClick={() => {
            // TODO: logout
            delete axiosInstance.defaults.headers.common['Authorization']
            reset()
            router.push(pagePath.LoginPage())
          }}
        >
          <IconifyIcon icon="logout" className="h-6 w-6" />
          <p className="text-[10px]">Logout</p>
        </div>
      </div>
    </>
  )
}

export default BottomNavigation

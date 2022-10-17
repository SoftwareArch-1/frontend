import { useRouter } from 'next/router'
import { IconifyIcon } from './IconifyIcon'

interface NavProp {
  text?: string
  backButtonEnable?: boolean
}

export const Nav = ({ text, backButtonEnable = false }: NavProp) => {
  const router = useRouter()
  return (
    <>
      <div className="h-[50px]"></div>
      <header className="fixed top-0 z-50 flex w-full items-center bg-slate-700 py-[.625rem] px-5">
        {backButtonEnable && (
          <span>
            <IconifyIcon
              icon="ios-back"
              className="mr-1 text-2xl text-slate-200"
              onClick={() => {
                router.back()
              }}
            />
          </span>
        )}
        <span className="text-2xl font-bold text-sky-500">
          {text ?? 'Meety'}
        </span>
      </header>
    </>
  )
}

import { IconifyIcon } from './IconifyIcon'
import InterestTag from './InterestTag'

interface UserCardProps {
  profilePicture?: string
  name: string
  interest: string[]
  detail: string
  className?: string
}

const UserCard = ({
  profilePicture,
  name,
  interest,
  detail,
  className,
}: UserCardProps) => {
  return (
    <section className="w-100 flex max-w-screen-sm flex-col items-center justify-center gap-y-[20px] rounded-lg bg-white px-[25px] py-5 shadow-md">
      <img
        src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        className="aspect-square h-5/6 max-h-[250px] w-5/6 max-w-[250px] rounded-full object-cover"
      ></img>
      <p className="text-2xl font-bold text-slate-800">{name}</p>
      {/* <div className="flex max-w-[500px] flex-wrap place-content-center gap-x-5 gap-y-5"> */}
      <div className="grid max-w-[500px] grid-cols-3 gap-5 md:grid-cols-5">
        {interest.map((tag) => (
          <InterestTag name={tag} />
        ))}
        <div className="rounded-full bg-sky-600 py-1.5 px-3 text-center text-xs text-white">
          +
        </div>
      </div>
      <div className="flex w-full max-w-[500px] items-center justify-between">
        <p className="text-lg font-bold text-slate-800">About Me</p>
        <IconifyIcon
          icon="pencil"
          className="text-sky-500"
          onClick={() => {
            console.log('click')
          }}
        />
      </div>
      <p className="text-base text-slate-800">{detail}</p>
    </section>
  )
}

export default UserCard

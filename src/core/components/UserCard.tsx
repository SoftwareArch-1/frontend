import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { updateDetail } from '../../user/api/updateDetail'
import { useUserStore } from '../../user/userStore'
import { updateUserDto } from '../sync-with-backend/dto/user/updateUser'
import { IconifyIcon } from './IconifyIcon'
import InterestTag from './InterestTag'

interface UserCardProps {
  profilePicture?: string
  name: string
  interest: string[]
  detail?: string
  className?: string
}

const UserCard = ({
  profilePicture,
  name,
  interest,
  detail,
  className,
}: UserCardProps) => {
  const [editDetail, setEditDetail] = useState(false)

  const { register, handleSubmit, setValue } = useForm<updateUserDto>({
    defaultValues: {
      detail: detail ?? '',
    },
  })

  const update = useUserStore((state) => state.update)

  const { mutate: updateDetailMutate } = useMutation(updateDetail, {
    onSuccess: (userDto) => update(userDto),
    onError: (error) => console.error(error),
  })

  const onSubmit = handleSubmit((data) => {
    updateDetailMutate(data)
    setEditDetail((prev) => !prev)
  })

  return (
    <section className="w-100 flex flex-col items-center justify-center gap-y-[20px] rounded-lg bg-white px-[25px] py-5 shadow-md">
      <img
        src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        className="aspect-square h-5/6 max-h-[250px] w-5/6 max-w-[250px] rounded-full object-cover"
      ></img>
      <p className="text-2xl font-bold text-slate-800">{name}</p>
      {/* <div className="flex max-w-[500px] flex-wrap place-content-center gap-x-5 gap-y-5"> */}
      <div className="grid max-w-[500px] grid-cols-3 gap-5 md:grid-cols-5">
        {interest.map((tag) => (
          <InterestTag name={tag} key={tag} />
        ))}
        <div className="rounded-full bg-sky-600 py-1.5 px-3 text-center text-xs text-white">
          +
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-[500px] flex-col items-center justify-center gap-y-[20px]"
      >
        <div className="flex w-full max-w-[500px] items-center justify-between">
          <p className="text-lg font-bold text-slate-800">About Me</p>
          {!editDetail && (
            <IconifyIcon
              icon="pencil"
              className="text-sky-500"
              onClick={() => {
                setEditDetail((prev) => !prev)
              }}
            />
          )}
          {editDetail && (
            <div className="flex gap-x-5">
              <IconifyIcon
                icon="close-thick"
                className="text-red-500"
                onClick={() => {
                  setValue('detail', detail ?? '')
                  setEditDetail((prev) => !prev)
                }}
              />
              <button>
                <IconifyIcon
                  icon="check-bold"
                  className="text-green-500"
                  type="submit"
                />
              </button>
            </div>
          )}
        </div>
        {!editDetail && (
          <p className="max-w-[500px] text-base text-slate-800">
            {detail ?? 'No description'}
          </p>
        )}
        {editDetail && (
          <textarea
            className="block w-full resize-y rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Your message..."
            {...register('detail')}
            rows={5}
          ></textarea>
        )}
      </form>
    </section>
  )
}

export default UserCard

import SearchBar from '../../core/components/SearchBar'
import { useUserStore } from '../userStore'
import { useMutation } from '@tanstack/react-query'
import { updateUser } from '../api/updateDetail'
import { FormEventHandler } from 'react'

const dummyInterest = [
  'Game',
  'Sport',
  'Food',
  'Shopping',
  'Card',
  'Wine',
  'Health',
  'Anime',
]

const InterestModalContent = () => {
  const update = useUserStore((state) => state.update)

  const { mutate: updateInterestMutate } = useMutation(updateUser, {
    onSuccess: (userDto) => update(userDto),
    onError: (error) => console.error(error),
  })

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(Object.fromEntries(formData))
  }

  return (
    <div>
      <SearchBar onChange={(event) => console.log(event.target.value)} />
      <div className="h-[30px]"></div>
      <form onSubmit={onSubmit}>
        <ul className="max-h-[200px] space-y-3 overflow-scroll overflow-x-hidden">
          {dummyInterest.map((interest) => (
            <li>
              <input
                type="checkbox"
                value={interest}
                name={interest}
                className="mr-5 h-[16px] w-[16px] appearance-none rounded-full bg-slate-200 align-middle checked:bg-sky-500"
              />
              <label className="align-middle text-base">{interest}</label>
            </li>
          ))}
        </ul>
        <div className="flex w-full justify-end pt-3">
          <button
            className="rounded-lg bg-sky-500 px-3 py-1.5 text-base text-white"
            type="submit"
          >
            save
          </button>
        </div>
      </form>
    </div>
  )
}

export default InterestModalContent

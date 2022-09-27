import SearchBar from '../../core/components/SearchBar'
import { useUserStore } from '../userStore'
import { useMutation } from '@tanstack/react-query'
import { updateUser } from '../api/updateDetail'
import { FormEventHandler, useEffect, useState } from 'react'
import { TypeOf, z } from 'zod'
import { getInterest } from '../api/getInterest'
import { interestSchemaType } from '../../core/constant/zod/interestSchema'
import LoadingSpinner from '../../core/components/LoadingSpinner'

interface InterestModalProps {
  initInterest: string[]
}

const InterestModalContent = ({ initInterest }: InterestModalProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [interests, setInterests] = useState<interestSchemaType[] | []>([])

  const update = useUserStore((state) => state.update)

  const { mutate: updateInterestMutate } = useMutation(updateUser, {
    onSuccess: (userDto) => update(userDto),
    onError: (error) => console.error(error),
  })

  const { mutate: fetchInterestMutate } = useMutation(getInterest, {
    onSuccess: (fetchedInterests) => {
      // setInterests(fetchedInterests.interests)
      // setIsLoading(false)

      //mock check loading
      setTimeout(function () {
        setInterests(fetchedInterests.interests)
        setIsLoading(false)
      }, 1000)
    },
    onError: (error) => {
      console.error(error)
      setIsLoading(false)
    },
  })

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(Object.fromEntries(formData))

    //TODO: format data

    // updateInterestMutate()
  }

  const fetchInterest = (search?: string) => {
    setIsLoading(true)
    fetchInterestMutate(search)
  }

  useEffect(() => {
    if (!isLoading) {
      fetchInterest()
    }
  }, [])

  const interestsCheckBoxList = interests.map((interest) => (
    <li key={interest.id}>
      <input
        type="checkbox"
        value={interest.id}
        name={interest.name}
        defaultChecked={initInterest.includes(interest.name)}
        className="mr-5 h-[16px] w-[16px] appearance-none rounded-full bg-slate-200 align-middle checked:bg-sky-500"
      />
      <label className="align-middle text-base">{interest.name}</label>
    </li>
  ))

  return (
    <div>
      <SearchBar onSearch={fetchInterest} />
      <div className="h-[30px]"></div>
      <form onSubmit={onSubmit}>
        <ul className="h-[200px] space-y-3 overflow-scroll overflow-x-hidden">
          {isLoading && (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && interestsCheckBoxList}
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

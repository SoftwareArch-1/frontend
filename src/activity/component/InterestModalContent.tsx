import SearchBar from '../../core/components/SearchBar'
import { useUserStore } from '../../user/userStore'
import { FormEventHandler, useEffect, useState } from 'react'
import { getInterest } from '../../user/api/getInterest'
import { interestSchemaType } from '../../core/constant/zod/interestSchema'
import LoadingSpinner from '../../core/components/LoadingSpinner'
import { tagList } from '../constant/tag'

interface InterestModalProps {
  initInterest: string[]
  onFilter: (data: string[]) => void
  multipleSelect?: boolean
}

const InterestModalContent = ({
  initInterest,
  onFilter,
  multipleSelect = false,
}: InterestModalProps) => {
  const [tags, setTags] = useState(tagList)

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const form = Object.fromEntries(formData)
    const formArray = Object.keys(form)
    onFilter(formArray)
  }

  const interestsCheckBoxList = tags.map((tag) => (
    <li key={tag}>
      <input
        type={multipleSelect ? 'checkbox' : 'radio'}
        value={tag}
        name={multipleSelect ? tag : 'radio'}
        defaultChecked={initInterest.includes(tag)}
        className="mr-5 h-[16px] w-[16px] appearance-none rounded-full bg-slate-200 align-middle checked:bg-sky-500"
      />
      <label className="align-middle text-base">{tag}</label>
    </li>
  ))

  const onSearch = (data: string) => {
    if (data !== '') {
      const filterList = tagList.filter((item) =>
        item.toLocaleLowerCase().includes(data.toLocaleLowerCase())
      )
      setTags(filterList)
    } else {
      setTags(tagList)
    }
  }

  return (
    <div>
      <SearchBar onSearch={onSearch} placeHolder="Search Interest Tag" />
      <div className="h-[30px]"></div>
      <form onSubmit={onSubmit}>
        <ul className="h-[200px] space-y-3 overflow-scroll overflow-x-hidden">
          {interestsCheckBoxList}
        </ul>
        <div className="flex w-full justify-end pt-3">
          <button
            className="rounded-lg bg-sky-500 px-3 py-1.5 text-base text-white"
            type="submit"
          >
            select
          </button>
        </div>
      </form>
    </div>
  )
}

export default InterestModalContent

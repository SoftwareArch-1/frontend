import { ChangeEventHandler, useEffect, useState } from 'react'
import { IconifyIcon } from './IconifyIcon'
import { useForm } from 'react-hook-form'
import { useDebounce } from 'react-use'

interface ISeacrBarProp {
  onSearch: (searchItem: string) => void
}

const SearchBar = ({ onSearch }: ISeacrBarProp) => {
  const { register, watch } = useForm({
    defaultValues: {
      searchBar: '',
    },
  })

  const searchText = watch('searchBar')

  const [isInit, setIsInit] = useState(true)

  useDebounce(
    () => {
      if (!isInit) {
        onSearch(searchText)
      } else {
        setIsInit(false)
      }
    },
    1000,
    [searchText]
  )

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <IconifyIcon icon="magnify" />
      </div>
      {/* <form> */}
      <input
        type="search"
        id="default-search"
        className="block w-full rounded-[30px]  bg-slate-200 p-4 pl-10 text-sm text-gray-900"
        placeholder="Search Interest"
        {...register('searchBar')}
      />
      {/* </form> */}
    </div>
  )
}

export default SearchBar

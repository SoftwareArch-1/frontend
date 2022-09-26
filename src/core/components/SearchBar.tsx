import { ChangeEventHandler } from 'react'
import { IconifyIcon } from './IconifyIcon'

interface ISeacrBarProp {
  onChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ onChange }: ISeacrBarProp) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <IconifyIcon icon="magnify" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full rounded-[30px]  bg-slate-200 p-4 pl-10 text-sm text-gray-900"
        placeholder="Search Interest"
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBar

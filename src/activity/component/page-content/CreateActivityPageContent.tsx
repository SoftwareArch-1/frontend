import { useState } from 'react'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import InterestModalContent from '../InterestModalContent'

const CreateActivityPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<string[]>([])

  const onFilter = (filterArray: string[]) => {
    setFilter(filterArray)
    console.log(filterArray)
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InterestModalContent
          initInterest={filter}
          onFilter={onFilter}
          multipleSelect
        />
      </Modal>
      <Nav />
      <form className="flex flex-col gap-y-2.5 px-5 py-6">
        <label className="text-sm">Title</label>
        <input className="h-[30px] w-full rounded-lg bg-slate-200 text-xs" />
        <label className="text-sm">Description</label>
        <textarea
          className="block w-full resize-y rounded-lg border border-gray-300 bg-slate-200 p-2.5 text-sm"
          placeholder="write a description"
          rows={5}
        />
        <div className="flex flex-row gap-x-2.5">
          <div className="flex flex-1 flex-col gap-y-2.5">
            <label className="text-sm">Maximum Participant</label>
            <input className="h-[30px] w-full rounded-lg bg-slate-200 text-xs" />
          </div>
          <div className="flex flex-1 flex-col gap-y-2.5">
            <label className="text-sm">Date</label>
            <input
              className="h-[30px] w-full rounded-lg bg-slate-200 text-xs"
              type="date"
            />
          </div>
        </div>
        <label className="text-sm">Contact Info</label>
        <div className="flex flex-row gap-x-2.5">
          <input
            type="radio"
            className="h-3 w-3 appearance-none rounded-sm border-black bg-black"
          />
          <label className="text-sm">Line</label>
          <input
            type="radio"
            className="h-3 w-3 appearance-none rounded-sm border-black bg-black"
          />
          <label className="text-sm">Discord</label>
        </div>
        <label className="text-sm">Tag</label>
        <button
          className="h-[30px] w-full rounded-lg bg-slate-200"
          onClick={() => setIsModalOpen(true)}
        />
        <label className="text-sm">Location</label>
        <input className="h-[30px] w-full rounded-lg bg-slate-200 text-xs" />
      </form>
    </>
  )
}

export default CreateActivityPageContent

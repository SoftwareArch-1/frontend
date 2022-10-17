import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { number, z } from 'zod'
import BottomNavigation from '../../../core/components/ButtomNavigation'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import { createActivityFormSchema } from '../../../core/constant/zod/form-schema/createActivityFormSchema'
import { useUserStore } from '../../../user/userStore'
import { createActivity } from '../../api/createActivity'
import InterestModalContent from '../InterestModalContent'

const CreateActivityPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<string[]>([])

  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof createActivityFormSchema>>({
    resolver: zodResolver(createActivityFormSchema),
    defaultValues: { location: null, ownerId: useUserStore.getState().id },
  })

  const { mutate: createActivityMutate } = useMutation(createActivity, {
    onSuccess: () => {
      router.back()
    },
    onError: () => {},
  })

  const onFilter = (filterArray: string[]) => {
    setFilter(filterArray)
    setValue('tag', filterArray[0])
    console.log(filterArray)
    setIsModalOpen(false)
  }

  const onSubmit = handleSubmit((data) => {
    createActivityMutate(data)
  })

  return (
    <>
      <Nav backButtonEnable text="Create Activity" />
      <form className="flex flex-col gap-y-2.5 px-5 py-6" onSubmit={onSubmit}>
        <label className="text-sm">
          Title<span className="text-red-500"> *</span>
        </label>
        <input
          className="h-[30px] w-full rounded-lg bg-slate-200 p-2.5 text-sm"
          {...register('name')}
        />
        <label className="text-sm">
          Description<span className="text-red-500"> *</span>
        </label>
        <textarea
          className="block w-full resize-y rounded-lg border border-gray-300 bg-slate-200 p-2.5 text-sm"
          placeholder="write a description"
          rows={5}
          {...register('description')}
        />
        <div className="flex flex-row gap-x-2.5">
          <div className="flex flex-1 flex-col gap-y-2.5">
            <label className="text-sm">
              Maximum Participant<span className="text-red-500"> *</span>
            </label>
            <input
              className="h-[30px] w-full rounded-lg bg-slate-200 p-2.5 text-sm"
              type={'number'}
              {...register('maxParticipants')}
            />
          </div>
          <div className="flex flex-1 flex-col gap-y-2.5">
            <label className="text-sm">
              Date<span className="text-red-500"> *</span>
            </label>
            <input
              className="h-[30px] w-full rounded-lg bg-slate-200 p-2.5 text-sm"
              type="date"
              {...register('targetDate')}
            />
          </div>
        </div>
        <label className="text-sm">Contact Info</label>
        <div className="flex flex-row items-center gap-x-2.5">
          <input
            type="checkbox"
            className="h-3 w-3 appearance-none rounded-sm border-2 border-black checked:bg-black"
            {...register('requireLine')}
          />
          <label className="text-sm">Line</label>
          <input
            type="checkbox"
            className="h-3 w-3 appearance-none rounded-sm border-2 border-black checked:bg-black"
            {...register('requireDiscord')}
          />
          <label className="text-sm">Discord</label>
        </div>
        <label className="text-sm">
          Tag<span className="text-red-500"> *</span>
        </label>
        <button
          type="button"
          className="h-[30px] w-full rounded-lg bg-slate-200 px-2.5 text-left text-sm"
          onClick={() => setIsModalOpen(true)}
        >
          {filter}
        </button>
        <label className="text-sm">Location</label>
        <input
          className="h-[30px] w-full rounded-lg bg-slate-200 p-2.5 text-sm"
          {...register('location')}
        />
        <div className="flex flex-row gap-x-2.5 pt-10">
          <button
            type="submit"
            className="h-[30px] flex-1 rounded-lg bg-sky-500 text-white"
          >
            Create
          </button>
          <button
            type="button"
            className="h-[30px] flex-1 rounded-lg bg-slate-500 text-white"
            onClick={() => router.back()}
          >
            Cancel
          </button>
        </div>
      </form>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InterestModalContent initInterest={filter} onFilter={onFilter} />
      </Modal>
      <BottomNavigation />
    </>
  )
}

export default CreateActivityPageContent

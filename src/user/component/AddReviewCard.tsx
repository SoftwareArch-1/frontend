import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { IconifyIcon } from '../../core/components/IconifyIcon'
import { review } from '../api/review'

interface AddReviewCardProps {
  refetch: () => {}
  onCloseModal: () => void
}

export const AddReviewCard = ({
  refetch,
  onCloseModal,
}: AddReviewCardProps) => {
  const [starsState, setStarsState] = useState(0)

  const textRef = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  const { id } = router.query

  const { mutate: reviewMutate } = useMutation(review, {
    onSuccess: () => {
      refetch()
      onCloseModal()
    },
    onError: (error) => console.error(error),
  })

  const onSubmit = () => {
    reviewMutate({
      content: textRef.current!.value,
      stars: starsState,
      revieweeId: String(id),
    })
  }

  return (
    <div className="flex w-full flex-col items-center justify-center text-base">
      <div className="flex gap-x-4 pb-5">
        {starsState >= 1 ? (
          <IconifyIcon
            icon="starSolid"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(1)
            }}
          />
        ) : (
          <IconifyIcon
            icon="starOultine"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(1)
            }}
          />
        )}
        {starsState >= 2 ? (
          <IconifyIcon
            icon="starSolid"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(2)
            }}
          />
        ) : (
          <IconifyIcon
            icon="starOultine"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(2)
            }}
          />
        )}
        {starsState >= 3 ? (
          <IconifyIcon
            icon="starSolid"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(3)
            }}
          />
        ) : (
          <IconifyIcon
            icon="starOultine"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(3)
            }}
          />
        )}
        {starsState >= 4 ? (
          <IconifyIcon
            icon="starSolid"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(4)
            }}
          />
        ) : (
          <IconifyIcon
            icon="starOultine"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(4)
            }}
          />
        )}
        {starsState >= 5 ? (
          <IconifyIcon
            icon="starSolid"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(5)
            }}
          />
        ) : (
          <IconifyIcon
            icon="starOultine"
            className="min-h-[24px] min-w-[24px] text-sky-500"
            onClick={() => {
              setStarsState(5)
            }}
          />
        )}
      </div>
      {/* <div className="flex h-24 w-full flex-col justify-center rounded-lg bg-slate-500"></div> */}
      <textarea
        autoFocus
        className="block w-full resize-y rounded-lg border border-gray-300 bg-slate-500 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="write a description"
        rows={5}
        ref={textRef}
      ></textarea>
      <div className="flex w-full justify-end pt-3">
        <button
          className="flex w-auto items-center justify-center rounded-xl bg-sky-500 text-xs text-white"
          onClick={onSubmit}
        >
          <p className="px-2 py-[2px]">Review</p>
        </button>
      </div>
    </div>
  )
}

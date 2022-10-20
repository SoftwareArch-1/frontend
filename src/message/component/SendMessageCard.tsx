import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

interface SendMessageProps {
  // refetch: () => {}
  onCloseModal: () => void
}

export const SendMessageCard = ({
  // refetch,
  onCloseModal,
}: SendMessageProps) => {
  const textRef = useRef<HTMLTextAreaElement>(null)
  // const router = useRouter()
  // const { id } = router.query

  // const { mutate: mesageMutate } = useMutation(sendMessage, {
  //   onSuccess: () => {
  //     refetch()
  //     onCloseModal()
  //   },
  //   onError: (error) => console.error(error),
  // })

  const onSubmit = () => {
    // messageMutate({
    //   content: textRef.current!.value,
    //   senderId: String(id),
    // })
    console.log(textRef.current!.value)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <textarea
        autoFocus
        className="block w-full resize-y rounded-lg border border-gray-300 bg-slate-500 p-2.5 text-sm text-white focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-slate-500 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="write a message"
        rows={5}
        ref={textRef}
      ></textarea>
      <div className="flex w-full justify-end pt-3">
        <button
          className="flex w-[17%] items-center justify-center rounded-xl bg-sky-500 text-xs text-white"
          onClick={onSubmit}
        >
          <p className="py-[2px]">Post</p>
        </button>
      </div>
    </div>
  )
}

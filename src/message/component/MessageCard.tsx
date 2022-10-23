import dayjs from 'dayjs'
import { useState } from 'react'
import { IconifyIcon } from '../../core/components/IconifyIcon'

export const MessageCard = (messageCardProps: {
  sender: string
  description: string
  sendDate: Date
  likes: number
  liked: boolean
}) => {
  const [liked, setLiked] = useState(messageCardProps.liked)
  const [likes, setLike] = useState(messageCardProps.likes)
  return (
    <div className="flex min-h-[87px] w-full flex-col rounded-lg bg-sky-500 px-3 py-3 text-white drop-shadow-md">
      <div className="flex w-full items-center justify-between text-xs">
        <div className="flex gap-x-0">{messageCardProps.sender}</div>
        <div>
          {dayjs(messageCardProps.sendDate).format('DD/MM/YYYY - HH:mm')}
        </div>
      </div>
      <div className="break-all text-sm">{messageCardProps.description}</div>
      <div className="flex w-full justify-end self-center pt-3 text-xs gap-x-0.5">
        {liked ? (
          <IconifyIcon
            icon="heartSolid"
            className="min-h-[16px] min-w-[16px] text-red-500"
          />
        ) : (
          <IconifyIcon
            icon="heartOutline"
            className="min-h-[16px] min-w-[16px] text-red-500"
            onClick={() => {
              setLiked(true)
              setLike(likes+1)
            }}
          />
        )}
        <p>{likes}</p>
      </div>
    </div>
  )
}

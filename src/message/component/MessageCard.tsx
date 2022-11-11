import dayjs from 'dayjs'
import { useState } from 'react'
import { IconifyIcon } from '../../core/components/IconifyIcon'
import { toggleFavorite } from '../socket/socket'

export const MessageCard = (messageCardProps: {
  id: string
  sender: string
  description: string
  sendDate: Date
  likes: number
  liked: boolean
}) => {
  return (
    <div className="flex min-h-[87px] w-full flex-col rounded-lg bg-slate-500 px-3 py-3 text-white drop-shadow-md">
      <div className="flex w-full items-center justify-between text-xs">
        <div className="flex gap-x-0">{messageCardProps.sender}</div>
        <div>
          {dayjs(messageCardProps.sendDate).format('DD/MM/YYYY - HH:mm')}
        </div>
      </div>
      <div className="break-all text-sm">{messageCardProps.description}</div>
      <div className="flex w-full justify-end gap-x-1 self-center pt-3 text-xs">
        {messageCardProps.liked ? (
          <IconifyIcon
            icon="heartSolid"
            className="min-h-[16px] min-w-[16px] text-red-500"
          />
        ) : (
          <IconifyIcon
            icon="heartOutline"
            className="min-h-[16px] min-w-[16px] text-white"
            onClick={() => {
              toggleFavorite(messageCardProps.id)
            }}
          />
        )}
        <p>{messageCardProps.likes}</p>
      </div>
    </div>
  )
}

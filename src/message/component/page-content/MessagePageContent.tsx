import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import shallow from 'zustand/shallow'
// import shallow from 'zustand/shallow'
import BottomNavigation from '../../../core/components/ButtomNavigation'
import FloatingActionButton from '../../../core/components/FloatingActionButton'
import { IconifyIcon } from '../../../core/components/IconifyIcon'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import { InitialData } from '../../../core/sync-with-backend/dto/message/dto/initialData'
import { AddReviewCard } from '../../../user/component/AddReviewCard'
import { useUserStore } from '../../../user/userStore'
import {
  disconnect,
  getFavorite,
  getPost,
  onInitData,
} from '../../socket/socket'
import { MessageCard } from '../MessageCard'
import { SenderCard } from '../SenderCard'
import { SendMessageCard } from '../SendMessageCard'

const MessagePageContent = () => {
  const { id: userId } = useUserStore(
    ({ id }) => ({
      id,
    }),
    shallow
  )

  const router = useRouter()
  const { id: activityId } = router.query

  const [showModal, setShowModal] = useState(false)

  const [data, setData] = useState<InitialData | []>([])

  useEffect(() => {
    if (activityId) {
      onInitData(
        (initData) => {
          setData(initData.reverse())
          console.log(...initData)
        },
        (postedData) => {
          setData((prev) => {
            return [postedData, ...prev]
          })
        },
        (likedData) => {
          console.log(likedData)
          setData((prev) => {
            const index = prev.findIndex(
              (message) => message.id === likedData.id
            )
            prev[index].likedUsers = likedData.likedUsers
            return [...prev]
          })
        },
        String(activityId)
      )
    }

    return () => {
      disconnect()
    }
  }, [activityId])

  const messageCardList = (
    <div className="w-100 flex flex-col gap-y-4 px-5 py-7">
      {data.map((message) => {
        return message.userId !== userId ? (
          <MessageCard
            key={message.id}
            id={message.id}
            sender={message.name}
            description={message.content}
            sendDate={message.createdAt}
            likes={message.likedUsers.length}
            liked={message.likedUsers.includes(userId ?? '')}
          />
        ) : (
          <SenderCard
            key={message.id}
            id={message.id}
            description={message.content}
            sendDate={message.createdAt}
            likes={message.likedUsers.length}
          />
        )
      })}
    </div>
  )

  return (
    <div className="h-screen">
      <Nav text={'ActivityName'} />
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        className={
          'flex h-auto flex-col justify-center rounded-lg bg-slate-700 drop-shadow-md'
        }
      >
        <SendMessageCard onCloseModal={() => setShowModal(false)} />
      </Modal>
      {messageCardList}
      <FloatingActionButton
        onClick={() => {
          setShowModal(true)
          console.log('message')
        }}
        className="bg-sky-500"
      >
        <IconifyIcon icon="plus" className="text-white" />
      </FloatingActionButton>
      <BottomNavigation />
    </div>
  )
}

export default MessagePageContent

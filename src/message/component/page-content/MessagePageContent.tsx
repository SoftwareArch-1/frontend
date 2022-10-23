import { useEffect, useState } from 'react'
import shallow from 'zustand/shallow'
import BottomNavigation from '../../../core/components/ButtomNavigation'
import FloatingActionButton from '../../../core/components/FloatingActionButton'
import { IconifyIcon } from '../../../core/components/IconifyIcon'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import { InitialData } from '../../../core/sync-with-backend/dto/message/dto/initialData'
import { AddReviewCard } from '../../../user/component/AddReviewCard'
import { useUserStore } from '../../../user/userStore'
import { getFavorite, getPost, onInitData } from '../../socket/socket'
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

  console.log(userId)

  const [showModal, setShowModal] = useState(false)

  const [data, setData] = useState<InitialData | []>([])

  useEffect(() => {
    onInitData((initData) => {
      setData(initData)
    })
    getPost((data) => {
      console.log('post', { data })
    })
    getFavorite((data) => {
      console.log('favorite', { data })
    })
  }, [])

  const messageCardList = (
    <div className="w-100 flex flex-col gap-y-4 px-5 py-7">
      {data.map((message) => {
        return (
          <MessageCard
            key={message.id}
            sender={'John Doe'}
            description={message.content}
            sendDate={message.createdAt}
            likes={message.likes}
            liked={false}
          />
        )
      })}
      {/* <MessageCard
        sender={'Baimon'}
        description={
          'helloajdkashdjkasjdlajdlasjdlkajdlajdlkajsdlsajdlajdlajsldjasldjsaldjlajdslksajdlasjdlsaj'
        }
        sendDate={new Date()}
      />
      <SenderCard description={'how are you?'} sendDate={new Date()} /> */}
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
        <SendMessageCard
          // refetch={}
          onCloseModal={() => setShowModal(false)}
        />
      </Modal>
      {messageCardList}
      {/* <div className="w-100 flex flex-col gap-y-4 px-5 py-7">
        <MessageCard
          sender={'Baimon'}
          description={
            'helloajdkashdjkasjdlajdlasjdlkajdlajdlkajsdlsajdlajdlajsldjasldjsaldjlajdslksajdlasjdlsaj'
          }
          sendDate={new Date()}
          likes={3}
          liked={true}
        />
        <MessageCard
          sender={'Baimon'}
          description={'helloajdkashdjkasjdlajdlasj'}
          sendDate={new Date()}
          likes={0}
          liked={false}
        />
        <SenderCard
          description={'how are you?'}
          sendDate={new Date()}
          likes={3}
        />
      </div>
        <SenderCard description={'how are you?'} sendDate={new Date()} />
      </div> */}
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

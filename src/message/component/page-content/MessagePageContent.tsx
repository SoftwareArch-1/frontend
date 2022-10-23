import { useState } from 'react'
import BottomNavigation from '../../../core/components/ButtomNavigation'
import FloatingActionButton from '../../../core/components/FloatingActionButton'
import { IconifyIcon } from '../../../core/components/IconifyIcon'
import { Modal } from '../../../core/components/Modal'
import { Nav } from '../../../core/components/Nav'
import { AddReviewCard } from '../../../user/component/AddReviewCard'
import { MessageCard } from '../MessageCard'
import { SenderCard } from '../SenderCard'
import { SendMessageCard } from '../SendMessageCard'

const MessagePageContent = () => {
  const [showModal, setShowModal] = useState(false)

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
      <div className="w-100 flex flex-col gap-y-4 px-5 py-7">
        <MessageCard
          sender={'Baimon'}
          description={
            'helloajdkashdjkasjdlajdlasjdlkajdlajdlkajsdlsajdlajdlajsldjasldjsaldjlajdslksajdlasjdlsaj'
          }
          sendDate={new Date()}
          like={3}
          liked={true}
        />
        <MessageCard
          sender={'Baimon'}
          description={'helloajdkashdjkasjdlajdlasj'}
          sendDate={new Date()}
          like={0}
          liked={false}
        />
        <SenderCard
          description={'how are you?'}
          sendDate={new Date()}
          like={3}
        />
      </div>
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

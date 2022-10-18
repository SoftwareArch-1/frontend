import BottomNavigation from '../../../core/components/ButtomNavigation'
import FloatingActionButton from '../../../core/components/FloatingActionButton'
import { IconifyIcon } from '../../../core/components/IconifyIcon'
import { Nav } from '../../../core/components/Nav'
import { MessageCard } from '../messageCard'
import { SenderCard } from '../SenderCard'

const MessagePageContent = () => {
  return (
    <div className="flex h-screen flex-col">
      <Nav text={'ActivityName'} />
      <div className="flex flex-col gap-y-4 pt-7 px-5">
        <MessageCard
          sender={'Baimon'}
          description={'hello'}
          sendDate={new Date()}
        />
        <SenderCard description={'how are you?'} sendDate={new Date()} />
      </div>
      <FloatingActionButton
          className="bg-sky-500"
          onClick={() => {
            console.log('Go to create Activity page')
          }}
        >
          <IconifyIcon icon="plus" className="h-7 w-7 text-white" />
        </FloatingActionButton>
      <BottomNavigation />
    </div>
  )
}

export default MessagePageContent

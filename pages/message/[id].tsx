import MessagePageContent from '../../src/message/component/page-content/MessagePageContent'
import { withAuth } from '../../src/user/component/withAuth'

const MessagePage = () => {
  return <MessagePageContent />
}

//export default MessagePage
export default withAuth(MessagePage)

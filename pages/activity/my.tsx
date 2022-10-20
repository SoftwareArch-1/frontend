import MyActivityPageContent from '../../src/activity/component/page-content/MyActivityPageContent'
import { withAuth } from '../../src/user/component/withAuth'

const MyACtivityPage = () => {
  return <MyActivityPageContent />
}

export default withAuth(MyACtivityPage)

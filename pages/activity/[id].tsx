import ActivityPageContent from '../../src/activity/component/page-content/ActivityPageContent'
import { withAuth } from '../../src/user/component/withAuth'

const ActivityDetailPage = () => {
  return <ActivityPageContent />
}
export default withAuth(ActivityDetailPage)

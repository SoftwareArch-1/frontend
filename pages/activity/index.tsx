import ActivitiesPageContent from '../../src/activity/component/page-content/ActivitiesPageContent'
import { withAuth } from '../../src/user/component/withAuth'

const ActivityPage = () => {
  return <ActivitiesPageContent />
}

export default withAuth(ActivityPage)

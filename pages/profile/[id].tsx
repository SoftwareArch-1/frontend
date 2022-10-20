import ViewProfilePageContent from '../../src/user/component/page-content/ViewProfilePageContent'
import { withAuth } from '../../src/user/component/withAuth'

const ViewProfile = () => {
  return <ViewProfilePageContent />
}

export default withAuth(ViewProfile)

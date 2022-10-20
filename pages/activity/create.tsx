import CreateActivityPageContent from '../../src/activity/component/page-content/CreateActivityPageContent'
import { withAuth } from '../../src/user/component/withAuth'

const CreateActivityPage = () => {
  return <CreateActivityPageContent></CreateActivityPageContent>
}

export default withAuth(CreateActivityPage)

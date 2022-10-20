import { useRouter } from 'next/router'
import ActivitiesPageContent from '../src/activity/component/page-content/ActivitiesPageContent'
import { pagePath } from '../src/core/utils/pagePath'
import { LoginPageContent } from '../src/user/component/page-content/LoginPageContent'
import { withAuth } from '../src/user/component/withAuth'

const HomePage = () => {
  const router = useRouter()
  router.push(pagePath.ActivityPage())
  return <></>
}

export default withAuth(HomePage)

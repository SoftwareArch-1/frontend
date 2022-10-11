import type { NextPage } from 'next'
import { IconifyIcon } from '../src/core/components/IconifyIcon'
import { LoginPageContent } from '../src/user/component/page-content/LoginPageContent'
import { withAuth } from '../src/user/component/withAuth'

const HomePage: NextPage = () => {
  return (
    // <div>
    //   <h1 className="text-red-400">Hi</h1>
    //   <IconifyIcon className="text-3xl" icon="partyPopper" />
    // </div>
    <LoginPageContent />
  )
}

// export default withAuth(HomePage)
export default HomePage

import type { NextPage } from 'next'
import { LoginPageContent } from '../src/user/component/page-content/LoginPageContent'

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

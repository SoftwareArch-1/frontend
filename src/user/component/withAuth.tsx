import { useRouter } from 'next/router'
import { pagePath } from '../../core/utils/pagePath'
import { useUserStore } from '../userStore'
import { LoginPageContent } from './page-content/LoginPageContent'

const ProtectedComponent = ({ children }: { children: () => JSX.Element }) => {
  const userId = useUserStore((state) => state.id)
  const router = useRouter()

  if (!userId) {
    router.push(pagePath.HomePage())
    return <></>
  }

  return children()
}

/**
 * Make sure that the user is logged in.
 */
export const withAuth = (WrappedComponent: () => JSX.Element) => {
  // eslint-disable-next-line react/display-name
  return () => <ProtectedComponent>{WrappedComponent}</ProtectedComponent>
}

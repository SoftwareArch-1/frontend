import { useUserStore } from '../userStore'
import { LoginPageContent } from './page-content/LoginPageContent'

const ProtectedComponent = ({ children }: { children: () => JSX.Element }) => {
  const userId = useUserStore((state) => state.id)

  if (!userId) {
    return <LoginPageContent />
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

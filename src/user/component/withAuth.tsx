import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode } from 'react'
import { useUserStore } from '../userStore'
import { LoginPageContent } from './page-content/LoginPageContent'

const ProtectedComponent = ({
  children,
}: {
  children: ReactNode | FunctionComponent
}) => {
  const userId = useUserStore((state) => state.id)

  if (!userId) {
    return <LoginPageContent />
  }

  return <>{children}</>
}

/**
 * Make sure that the user is logged in.
 */
export const withAuth = (WrappedComponent: ReactNode | FunctionComponent) => {
  // eslint-disable-next-line react/display-name
  return () => <ProtectedComponent>{WrappedComponent}</ProtectedComponent>
}

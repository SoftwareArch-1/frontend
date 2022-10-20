import { ProfilePageContent } from '../src/user/component/page-content/ProfilePageContent'
import { ProtectedComponent, withAuth } from '../src/user/component/withAuth'

const ProfilePage = () => {
  return (
    <ProtectedComponent>
      <ProfilePageContent />
    </ProtectedComponent>
  )
}

export default ProfilePage

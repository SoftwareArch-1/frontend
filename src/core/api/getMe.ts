import { useUserStore } from '../../user/userStore'
import { axiosInstance } from '../constant/axiosInstance'
import { userDtoSchema } from '../sync-with-backend/dto/user/user'
import { apiPath } from '../utils/apiPath'

export const getMe = async () => {
  const accessToken = useUserStore.getState().accessToken
  console.log(accessToken)
  if (accessToken) {
    const config = {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE2NjU0OTQ0ODgsImV4cCI6MTY2NTU4MDg4OH0.sOstP3E-KANr8_aY-B9NDKzoSaWGH-61BTKKTLOu5FI',
      },
    }
    await axiosInstance.get(apiPath.user.user(), config)
  }
  return
}

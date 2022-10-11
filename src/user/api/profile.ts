import { axiosInstance } from '../../core/constant/axiosInstance'
import { reviewSchema, ReviewsType } from '../../core/sync-with-backend/dto/user/review'
import { profileSchema, ProfileType } from '../../core/sync-with-backend/dto/user/viewProfile'
import { apiPath } from '../../core/utils/apiPath'

let config = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE2NjU0OTQ0ODgsImV4cCI6MTY2NTU4MDg4OH0.sOstP3E-KANr8_aY-B9NDKzoSaWGH-61BTKKTLOu5FI',
  }
}

export const getProfile = async (id: string) => {
  const { data } = await axiosInstance.get(
    apiPath.user.profile(id),
    config,
  )
  return profileSchema.parse(data)
}
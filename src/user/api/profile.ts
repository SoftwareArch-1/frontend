import { axiosInstance } from '../../core/constant/axiosInstance'
import {
  reviewSchema,
  ReviewsType,
} from '../../core/sync-with-backend/dto/user/review'
import {
  profileSchema,
  ProfileType,
} from '../../core/sync-with-backend/dto/user/viewProfile'
import { apiPath } from '../../core/utils/apiPath'

export const getProfile = async (id: string) => {
  const { data } = await axiosInstance.get(apiPath.user.profile(id))
  return profileSchema.parse(data)
}

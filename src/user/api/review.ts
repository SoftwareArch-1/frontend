import { axiosInstance } from '../../core/constant/axiosInstance'
import { reviewSchema, ReviewsType } from '../../core/sync-with-backend/dto/user/review'
import { apiPath } from '../../core/utils/apiPath'

export const review = async (reviewData: ReviewsType) => {
  // const { data } = await axiosInstance.post(
  //   apiPath.user.review(),
  //   reviewSchema.parse(reviewData)
  // )
  console.log(reviewData)
  return
}

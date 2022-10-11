import { axiosInstance } from '../../core/constant/axiosInstance'
import { findOneActivity } from '../../core/sync-with-backend/dto/activity/dto/findOne.dto'
import { CreateActivityModel, CreateActivityType } from '../../core/sync-with-backend/dto/activity/zod/createActivity'
import { apiPath } from '../../core/utils/apiPath'

export const createActivity = async (dto: CreateActivityType) => {
  const { data } = await axiosInstance.post(apiPath.activity.createActivity(),CreateActivityModel.parse(dto))
  return
  // mock database
  // return findOneActivity.parse(mockActivity)
}

import { axiosInstance } from '../../core/constant/axiosInstance'
import { findOneActivity } from '../../core/sync-with-backend/dto/activity/dto/findOne.dto'
import { apiPath } from '../../core/utils/apiPath'

export const getActivity = async (id: string) => {
  const { data } = await axiosInstance.get(apiPath.activity.getActivityById(id))
  return findOneActivity.parse(data)
}

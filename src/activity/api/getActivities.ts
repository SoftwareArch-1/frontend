import { axiosInstance } from '../../core/constant/axiosInstance'
import { findAllActivitiesDto } from '../../core/sync-with-backend/dto/activity/dto/finAll.dto'
import { apiPath } from '../../core/utils/apiPath'

export const getActivities = async () => {
  const { data } = await axiosInstance.get(apiPath.activity.getActivities())
  return findAllActivitiesDto.parse(data)
}

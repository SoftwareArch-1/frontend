import { axiosInstance } from '../../core/constant/axiosInstance'
import { findAllActivitiesDto } from '../../core/sync-with-backend/dto/activity/dto/finAll.dto'
import { apiPath } from '../../core/utils/apiPath'

export const getOwnedActivity = async (id: string) => {
  const { data } = await axiosInstance.get(
    apiPath.activity.getOwnedActivities(id)
  )
  return findAllActivitiesDto.parse(data)
}

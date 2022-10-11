import { axiosInstance } from '../../core/constant/axiosInstance'
import { findAllActivitiesDto } from '../../core/sync-with-backend/dto/activity/dto/finAll.dto'
import { apiPath } from '../../core/utils/apiPath'

export const getJoinedActivity = async (id: string) => {
  const { data } = await axiosInstance.get(
    apiPath.activity.getJoinedActivities(id)
  )
  return findAllActivitiesDto.parse(data)
}

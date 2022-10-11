import { axiosInstance } from '../../core/constant/axiosInstance'
import { updateParticipantDto } from '../../core/sync-with-backend/dto/activity/updateParticipantDto'
import { apiPath } from '../../core/utils/apiPath'

export const joinActivity = async (dto: updateParticipantDto) => {
  // const { data } = await axiosInstance.get(apiPath.activity.getActivities())
  // return activityListDtoSchema.parse(data)

  //mock database
  return true
}

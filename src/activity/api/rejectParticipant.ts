import { axiosInstance } from '../../core/constant/axiosInstance'
import { findOneActivity } from '../../core/sync-with-backend/dto/activity/dto/findOne.dto'
import {
  updateParticipantDto,
  updateParticipantDtoSchema,
} from '../../core/sync-with-backend/dto/activity/updateParticipantDto'
import { apiPath } from '../../core/utils/apiPath'

export const rejectParticipant = async (dto: updateParticipantDto) => {
  const { data } = await axiosInstance.post(
    apiPath.activity.rejectParticipant(),
    updateParticipantDtoSchema.parse(dto)
  )
  return findOneActivity.parse(data)
}
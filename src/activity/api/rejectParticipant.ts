import { axiosInstance } from '../../core/constant/axiosInstance'
import { rejectParticipantDtoSchema } from '../../core/sync-with-backend/dto/activity/dto/updateParticipant'
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
  return rejectParticipantDtoSchema.parse(data)
}

import { axiosInstance } from '../../core/constant/axiosInstance'
import { acceptParticipantDtoSchema } from '../../core/sync-with-backend/dto/activity/dto/updateParticipant'
import {
  updateParticipantDto,
  updateParticipantDtoSchema,
} from '../../core/sync-with-backend/dto/activity/updateParticipantDto'
import { apiPath } from '../../core/utils/apiPath'

export const acceptParticipant = async (dto: updateParticipantDto) => {
  const { data } = await axiosInstance.post(
    apiPath.activity.acceptParticipant(),
    updateParticipantDtoSchema.parse(dto)
  )
  return acceptParticipantDtoSchema.parse(data)
}

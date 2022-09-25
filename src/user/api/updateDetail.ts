import { axiosInstance } from '../../core/constant/axiosInstance'
import {
  updateUserDto,
  updateUserDtoSchema,
} from '../../core/sync-with-backend/dto/user/updateUser'
import { userDtoSchema } from '../../core/sync-with-backend/dto/user/user'
import { apiPath } from '../../core/utils/apiPath'

export const updateDetail = async (dto: updateUserDto) => {
  const { data } = await axiosInstance.put(
    apiPath.user.createUser(),
    updateUserDtoSchema.parse(dto)
  )
  return userDtoSchema.parse(data)
}

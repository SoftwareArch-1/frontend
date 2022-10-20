import { axiosInstance } from '../../core/constant/axiosInstance'
import {
  updateUserDto,
  updateUserDtoSchema,
} from '../../core/sync-with-backend/dto/user/updateUser'
import { userDtoSchema } from '../../core/sync-with-backend/dto/user/user'
import { apiPath } from '../../core/utils/apiPath'

export const updateUser = async (dto: updateUserDto) => {
  console.log(dto)
  const { data } = await axiosInstance.patch(
    apiPath.user.updateUser(),
    updateUserDtoSchema.parse(dto)
  )
  return userDtoSchema.parse(data)
}

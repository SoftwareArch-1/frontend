import { axiosInstance } from '../../core/constant/axiosInstance'
import {
  CreateUserDto,
  createUserDtoSchema,
} from '../../core/sync-with-backend/dto/user/createUserDto'
import { userDtoSchema } from '../../core/sync-with-backend/dto/user/user'
import { apiPath } from '../../core/utils/apiPath'

export const createUser = async (dto: CreateUserDto) => {
  const { data } = await axiosInstance.post(
    apiPath.user.createUser(),
    createUserDtoSchema.parse(dto)
  )
  return userDtoSchema.parse(data)
}

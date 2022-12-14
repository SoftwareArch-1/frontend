import { axiosInstance } from '../../core/constant/axiosInstance'
import {
  credentialsSchema,
  LoginCredentials,
} from '../../core/sync-with-backend/dto/user/login'
import { LoginDtoSchema } from '../../core/sync-with-backend/dto/user/LoginDto'
import { userDtoSchema } from '../../core/sync-with-backend/dto/user/user'
import { apiPath } from '../../core/utils/apiPath'

export const login = async (creds: LoginCredentials) => {
  const { data } = await axiosInstance.post(
    apiPath.user.login(),
    credentialsSchema.parse(creds)
  )
  // return userDtoSchema.parse(data)
  return LoginDtoSchema.parse(data)
}

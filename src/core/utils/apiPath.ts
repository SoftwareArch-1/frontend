import { config } from '../constant/env-config'

/**
 * @example
 * axiosInstance.get(apiPath.getUserById('userId')) // GET /user/userId
 */
export const apiPath = {
  /** for user service */
  user: {
    login: () => `${config.gatewayUrl}/login`,
    createUser: () => `${config.gatewayUrl}/create-user`,
    updateUser: () => `${config.gatewayUrl}/update-user`,
    review: () => `${config.gatewayUrl}/review`,
    profile: (id: string) => `${config.gatewayUrl}/user/${id}`,
  },

  /** for activity service */
  activity: {},
} as const

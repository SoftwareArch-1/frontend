import { config } from '../constant/env-config'

/**
 * @example
 * axiosInstance.get(apiPath.getUserById('userId')) // GET /user/userId
 */
export const apiPath = {
  /** for user service */
  user: {
    login: () => `${config.gatewayUrl}/auth/login`,
    createUser: () => `${config.gatewayUrl}/user`,
    updateUser: () => `${config.gatewayUrl}/user`,
    review: () => `${config.gatewayUrl}/review`,
    profile: (id: string) => `${config.gatewayUrl}/user/${id}`,
    user: () => `${config.gatewayUrl}/user`,
  },

  /** for activity service */
  activity: {
    getActivities: () => `${config.gatewayUrl}/activity`,
    getActivityById: (id: string) => `${config.gatewayUrl}/activity/${id}`,
    getJoinedActivities: () => `${config.gatewayUrl}/activity/joined`,
    getOwnedActivities: () => `${config.gatewayUrl}/activity/owned`,
    acceptParticipant: () => `${config.gatewayUrl}/activity/accept-join`,
    rejectParticipant: () => `${config.gatewayUrl}/activity/decline-join`,
    joinActivity: () => `${config.gatewayUrl}/activity/request-join`,
    createActivity: () => `${config.gatewayUrl}/activity`,
  },
} as const

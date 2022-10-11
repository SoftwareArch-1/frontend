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
    updateUser: () => `${config.gatewayUrl}/update-user`,
    review: () => `${config.gatewayUrl}/review`,
    profile: (id: string) => `${config.gatewayUrl}/user/${id}`,
  },

  /** for activity service */
  activity: {
    getActivities: () => `${config.gatewayUrl}/activity`,
    getActivityById: (id: string) => `${config.gatewayUrl}/activity/${id}`,
    getJoinedActivities: (id: string) =>
      `${config.gatewayUrl}/activity/joined/${id}`,
    getOwnedActivities: (id: string) =>
      `${config.gatewayUrl}/activity/owned/${id}`,
    acceptParticipant: () => `${config.gatewayUrl}/activity/accept-join`,
    rejectParticipant: () => `${config.gatewayUrl}/activity/decline-join`,
  },
} as const

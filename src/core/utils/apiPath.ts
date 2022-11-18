// import { config } from '../constant/env-config'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

/**
 * @example
 * axiosInstance.get(apiPath.getUserById('userId')) // GET /user/userId
 */
export const apiPath = {
  /** for user service */
  user: {
    login: () => `${publicRuntimeConfig.url}/auth/login`,
    createUser: () => `${publicRuntimeConfig.url}/user`,
    updateUser: () => `${publicRuntimeConfig.url}/user`,
    review: () => `${publicRuntimeConfig.url}/review`,
    profile: (id: string) => `${publicRuntimeConfig.url}/user/${id}`,
    user: () => `${publicRuntimeConfig.url}/user`,
  },

  /** for activity service */
  activity: {
    getActivities: () => `${publicRuntimeConfig.url}/activity`,
    getActivityById: (id: string) =>
      `${publicRuntimeConfig.url}/activity/${id}`,
    getJoinedActivities: () => `${publicRuntimeConfig.url}/activity/joined`,
    getOwnedActivities: () => `${publicRuntimeConfig.url}/activity/owned`,
    acceptParticipant: () => `${publicRuntimeConfig.url}/activity/accept-join`,
    rejectParticipant: () => `${publicRuntimeConfig.url}/activity/decline-join`,
    joinActivity: () => `${publicRuntimeConfig.url}/activity/request-join`,
    createActivity: () => `${publicRuntimeConfig.url}/activity`,
  },
} as const

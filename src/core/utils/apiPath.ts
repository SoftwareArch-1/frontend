const baseUrl = {
  user: process.env.NEXT_PUBLIC_USER_API_URL,
  activity: process.env.NEXT_PUBLIC_ACTIVITY_API_URL,
} as const

/**
 * @example
 * axiosInstance.get(apiPath.getUserById('userId')) // GET /user/userId
 */
export const apiPath = {
  /** for user service */
  user: {
    login: () => `${baseUrl.user}/login`,
    createUser: () => `${baseUrl.user}/create`,
  },

  /** for activity service */
  activity: {},
} as const

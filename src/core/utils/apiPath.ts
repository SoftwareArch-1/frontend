const baseUrl = {
  gatewayUrl: process.env.NEXT_PUBLIC_API_GATEWAY_URL,
} as const

/**
 * @example
 * axiosInstance.get(apiPath.getUserById('userId')) // GET /user/userId
 */
export const apiPath = {
  /** for user service */
  user: {
    login: () => `${baseUrl.gatewayUrl}/login`,
    createUser: () => `${baseUrl.gatewayUrl}/create-user`,
  },

  /** for activity service */
  activity: {},
} as const

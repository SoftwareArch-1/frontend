import axios from 'axios'
import Router from 'next/router'
import errorMap from 'zod/lib/locales/en'
import { useUserStore } from '../../user/userStore'
import { pagePath } from '../utils/pagePath'

export const axiosInstance = axios.create({
  withCredentials: true,
})

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${
  useUserStore.getState().accessToken
}`

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      Router.push(pagePath.HomePage())
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

import '../styles/globals.css'

import dayjs from 'dayjs'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useUserStore } from '../src/user/userStore'
import { useRouter } from 'next/router'
import { pagePath } from '../src/core/utils/pagePath'
import { disconnect, initSocket } from '../src/message/socket/socket'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

dayjs.extend(require('dayjs/plugin/relativeTime'))

function MyApp({ Component, pageProps }: AppProps) {
  const [isInit, setIsInit] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const hydrate = useUserStore.persist.onFinishHydration(() => {
      setIsInit(false)
    })
    return () => {
      useUserStore.persist.rehydrate()
      hydrate()
    }
  }, [])

  const { id: activityId } = router.query

  useEffect(() => {
    if (router.pathname === pagePath.MessagePage('[id]') && activityId) {
      initSocket(String(activityId))
    } else {
      disconnect()
    }
  }, [router.pathname, activityId])

  if (isInit) {
    return <></>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp

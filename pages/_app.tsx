import '../styles/globals.css'

import dayjs from 'dayjs'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

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

  console.log(publicRuntimeConfig)

  useEffect(() => {
    // const hydrate = useUserStore.persist.onFinishHydration(() => {
    //   setIsInit(false)
    // })
    // return () => {
    //   useUserStore.persist.rehydrate()
    //   hydrate()
    // }
    setIsInit(false)
  }, [])

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

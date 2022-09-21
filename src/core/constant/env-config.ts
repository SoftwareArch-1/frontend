const notUndef = (env: string | undefined) => {
  if (env === undefined) {
    throw new Error('Environment variable not defined')
  }
  return env
}

export const config = Object.freeze({
  gatewayUrl: notUndef(process.env.NEXT_PUBLIC_API_GATEWAY_URL),
})

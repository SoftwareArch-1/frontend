const envDef = (name: string, env: string | undefined) => {
  if (env === undefined) {
    throw new Error(`Environment variable ${name} is not defined`)
  }
  return env
}

export const config = Object.freeze({
  gatewayUrl: envDef(
    'NEXT_PUBLIC_API_GATEWAY_URL',
    process.env.NEXT_PUBLIC_API_GATEWAY_URL
  ),
})

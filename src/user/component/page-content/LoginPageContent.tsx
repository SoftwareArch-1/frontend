import Head from 'next/head'
import { useForm } from 'react-hook-form'

import { useMutation } from '@tanstack/react-query'

import { LoginCredentials } from '../../../core/sync-with-backend/dto/user/login'
import { login } from '../../api/login'
import { useUserStore } from '../../userStore'

export const LoginPageContent = () => {
  const { register, handleSubmit } = useForm<LoginCredentials>()
  const update = useUserStore((state) => state.update)
  const { mutate: loginMutate } = useMutation(login, {
    onSuccess: (userDto) => update(() => userDto),
    onError: (error) => console.error(error),
  })

  const onSubmit = handleSubmit((data) => loginMutate(data))

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div>login page content</div>

      <form onSubmit={onSubmit}>
        <input type="email" {...register('email')} />
        <input type="password" {...register('password')} />

        <button type="submit">Login</button>
      </form>
    </>
  )
}

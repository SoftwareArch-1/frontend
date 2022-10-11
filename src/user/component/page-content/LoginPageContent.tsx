import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import TextField from '../../../core/components/textField'
import {
  credentialsSchema,
  LoginCredentials,
} from '../../../core/sync-with-backend/dto/user/login'
import { pagePath } from '../../../core/utils/pagePath'
import { login } from '../../api/login'
import { useUserStore } from '../../userStore'
import WithSignInBackground from '../withSigninBackground'
import { axiosInstance } from '../../../core/constant/axiosInstance'

export const LoginPageContent = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(credentialsSchema),
  })

  const update = useUserStore((state) => state.update)

  const { mutate: loginMutate } = useMutation(login, {
    onSuccess: (userDto) => {
      update(userDto.user.profile)
      update({ accessToken: userDto.access_token })
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userDto.access_token}`
      router.push(pagePath.ProfilePage())
    },
    onError: (error) => console.error(error),
  })

  const onSubmit = handleSubmit((data) => {
    loginMutate(data)
  })

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <WithSignInBackground>
        <h1 className="mb-[90px] text-4xl font-bold text-white">
          Welcome to <span className="text-sky-500">Meety</span>
        </h1>
        <form
          onSubmit={onSubmit}
          className="mb-[20px] flex flex-col items-center"
        >
          <TextField
            label="Email Address"
            placeholder="enter your email address"
            type="text"
            error={errors.username}
            useFormRegisterReturn={register('username')}
          />
          <div className="h-[10px]"></div>
          <TextField
            label="Password"
            placeholder="enter your password"
            type="password"
            error={errors.password}
            useFormRegisterReturn={register('password')}
          />
          <div className="h-[90px]"></div>
          <button
            type="submit"
            className="h-[40px] w-[200px] rounded-lg bg-white text-base text-black"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={() => router.push(pagePath.SignUpPage())}
          className="h-[40px] w-[200px] rounded-lg bg-sky-500 text-base text-white"
        >
          Sign Up
        </button>
      </WithSignInBackground>
    </>
  )
}

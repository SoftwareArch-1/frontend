import Head from 'next/head'
import { useForm } from 'react-hook-form'

import { useMutation } from '@tanstack/react-query'

import { LoginCredentials } from '../../../core/sync-with-backend/dto/user/login'
import { login } from '../../api/login'
import { useUserStore } from '../../userStore'
import TextField from '../../../core/components/textField'
import WithSignInBackground from '../withSigninBackground'
import { useRouter } from 'next/router'
import { pagePath } from '../../../core/utils/pagePath'

export const LoginPageContent = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>()
  const update = useUserStore((state) => state.update)
  const { mutate: loginMutate } = useMutation(login, {
    onSuccess: (userDto) => update(() => userDto),
    onError: (error) => console.error(error),
  })

  const onSubmit = handleSubmit((data) => {
    console.log('asdf')
    loginMutate(data)
  })

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <WithSignInBackground>
        <h1 className="mb-[90px] font-Inter text-4xl font-bold text-white">
          Welcome to <span className="text-sky-500">Meety</span>
        </h1>
        <form
          onSubmit={onSubmit}
          className="mb-[20px] flex flex-col items-center"
        >
          <TextField
            label="Email Address"
            placeholder="enter your email address"
            id="email"
            type="text"
            error={errors.email}
            useFormRegisterReturn={register('email')}
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

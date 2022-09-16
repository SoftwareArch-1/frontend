import Head from 'next/head'
import { useForm } from 'react-hook-form'

import { useMutation } from '@tanstack/react-query'

import { LoginCredentials } from '../../../core/sync-with-backend/dto/user/login'
import { login } from '../../api/login'
import { useUserStore } from '../../userStore'
import TextField from '../../../core/components/textField'

export const LoginPageContent = () => {
  const { register, handleSubmit } = useForm<LoginCredentials>()
  const update = useUserStore((state) => state.update)
  const { mutate: loginMutate } = useMutation(login, {
    onSuccess: (userDto) => update(() => userDto),
    onError: (error) => console.error(error),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    loginMutate(data)
  })

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className=" h-screen w-screen bg-[url('https://images.unsplash.com/photo-1508904635850-d986b19765d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')] bg-cover bg-center bg-no-repeat ">
        <div className="flex h-full w-full flex-col items-center justify-center bg-slate-700 bg-opacity-30 backdrop-blur-sm">
          <h1 className="mb-[90px] text-4xl font-bold text-white">
            Welcome to <span className="text-sky-500">Meety</span>
          </h1>
          <form
            onSubmit={onSubmit}
            className="mb-[20px] flex flex-col items-center"
          >
            {/* <input type="email" {...register('email')} /> */}
            <TextField
              label="Email Address"
              placeholder="enter your email address"
              id="email"
              useFormRegisterReturn={register('email')}
            />
            <div className="h-[10px]"></div>
            <TextField
              label="Password"
              placeholder="enter your password"
              id="password"
              useFormRegisterReturn={register('password')}
              hintText="require at least 8 characters"
            />
            {/* <input type="password" {...register('password')} /> */}
            <div className="h-[90px]"></div>
            <button
              type="submit"
              className="h-[40px] w-[200px] rounded-lg bg-white text-base text-black"
            >
              Sign In
            </button>
          </form>
          <button
            onClick={() => {}}
            className="h-[40px] w-[200px] rounded-lg bg-sky-500 text-base text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}

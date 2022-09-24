import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import TextField from '../../../core/components/textField'
import { signUpFormSchema } from '../../../core/constant/zod/form-schema/signUpFormSchema'
import WithSignInBackground from '../withSigninBackground'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { createUser } from '../../api/create'
import { useUserStore } from '../../userStore'
import { createUserDtoSchema } from '../../../core/sync-with-backend/dto/user/createUserDto'

const SignUpPageContent = () => {
  const [page, setPage] = useState(true)
  const [firstSubmit, setFirstSubmit] = useState(false)

  const update = useUserStore((state) => state.update)

  const { mutate: createUserMutate } = useMutation(createUser, {
    onSuccess: (userDto) => update(userDto),
    onError: (error) => console.error(error),
  })

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  })

  const emailPasswordSubmit = async () => {
    setFirstSubmit((prev) => !prev)
    const result = await trigger(['email', 'password', 'confirmPassword'])
    if (!result) {
      return
    }
    if (getValues('confirmPassword') !== getValues('password')) {
      setError('confirmPassword', {
        type: 'Mismatch',
        message: 'Confirm password not match with password',
      })
      return
    }
    setPage((prev) => !prev)
  }

  const onSubmit = handleSubmit((data) => {
    const createUserData = createUserDtoSchema.parse(data)
    createUserMutate(createUserData)
  })

  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>

      <WithSignInBackground>
        {page && (
          <h1 className="mb-[90px] text-4xl font-bold text-white">
            Create Your <span className="text-sky-500">Meety</span>
          </h1>
        )}
        {!page && (
          <h1 className="mb-[90px] text-4xl font-bold text-white">
            Create Your <span className="text-sky-500">Meety</span>
          </h1>
        )}
        <form
          className="mb-[20px] flex flex-col items-center"
          onSubmit={onSubmit}
        >
          {page && (
            <>
              <TextField
                label="Email Address"
                placeholder="enter your email address"
                id="text"
                type="text"
                error={errors.email}
                useFormRegisterReturn={register('email', {
                  onChange: async (e) => {
                    if (firstSubmit) {
                      await trigger('email')
                    }
                  },
                })}
              />
              <div className="h-[10px]"></div>
              <TextField
                label="Password"
                placeholder="enter your password"
                id="password"
                type="password"
                hintText="require at least 8 characters"
                error={errors.password}
                useFormRegisterReturn={register('password', {
                  onChange: async (e) => {
                    if (firstSubmit) {
                      await trigger('password')
                    }
                  },
                })}
              />
              <div className="h-[10px]"></div>
              <TextField
                label="Confirm Password"
                placeholder="confirm your password"
                id="confirmPassword"
                type="password"
                error={errors.confirmPassword}
                useFormRegisterReturn={register('confirmPassword', {
                  onChange: async (e) => {
                    if (firstSubmit) {
                      await trigger('confirmPassword')
                    }
                  },
                })}
              />
              <div className="h-[90px]"></div>
              <button
                type="button"
                className="h-[40px] w-[200px] rounded-lg bg-sky-500 text-base text-white"
                onClick={emailPasswordSubmit}
              >
                Next
              </button>
            </>
          )}
          {!page && (
            <>
              <TextField
                label="Name"
                placeholder="enter your name"
                type="text"
                error={errors.name}
                useFormRegisterReturn={register('name')}
              />
              <div className="h-[10px]"></div>
              <TextField
                label="Surname"
                placeholder="enter your surname"
                type="text"
                error={errors.surname}
                useFormRegisterReturn={register('surname')}
              />
              <TextField
                label="Date of Birth"
                error={errors.birthday}
                type="date"
                useFormRegisterReturn={register('birthday')}
              />
              <div className="h-[90px]"></div>
              <button
                type="submit"
                className="h-[40px] w-[200px] rounded-lg bg-sky-500 text-base text-white"
              >
                Next
              </button>
            </>
          )}
        </form>
      </WithSignInBackground>
    </>
  )
}

export default SignUpPageContent

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import TextField from '../../../core/components/textField'
import { signUpFormSchema } from '../../../core/constant/zod/form-schema/signUpFormSchema'
import { pagePath } from '../../../core/utils/pagePath'
import WithSignInBackground from '../withSigninBackground'

const SignUpPageContent = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    console.log(data.confirmPassword !== data.password)
    if (data.confirmPassword !== data.password) {
      setError('confirmPassword', {
        type: 'Mismatch',
        message: 'Confirm password not match with password',
      })
      return
    }
    router.push(pagePath.SignUpInfoPage())
  })

  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>

      <WithSignInBackground>
        <h1 className="mb-[90px] text-4xl font-bold text-white">
          Create Your <span className="text-sky-500">Meety</span>
        </h1>
        <form
          className="mb-[20px] flex flex-col items-center"
          onSubmit={onSubmit}
        >
          <TextField
            label="Email Address"
            placeholder="enter your email address"
            id="text"
            error={errors.email}
            useFormRegisterReturn={register('email')}
          />
          <div className="h-[10px]"></div>
          <TextField
            label="Password"
            placeholder="enter your password"
            id="password"
            type="password"
            hintText="require at least 8 characters"
            error={errors.password}
            useFormRegisterReturn={register('password')}
          />
          <div className="h-[10px]"></div>
          <TextField
            label="Confirm Password"
            placeholder="confirm your password"
            id="confirmPassword"
            type="password"
            error={errors.confirmPassword}
            useFormRegisterReturn={register('confirmPassword')}
          />
          <div className="h-[90px]"></div>
          <button
            type="submit"
            className="h-[40px] w-[200px] rounded-lg bg-sky-500 text-base text-white"
          >
            Next
          </button>
        </form>
      </WithSignInBackground>
    </>
  )
}

export default SignUpPageContent

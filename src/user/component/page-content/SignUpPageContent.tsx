import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import TextField from '../../../core/components/textField'
import { pagePath } from '../../../core/utils/pagePath'
import WithSignInBackground from '../withSigninBackground'

const SignUpPageContent = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{
    email: string
    password: string
    confirmPassword: string
  }>()

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
            useFormRegisterReturn={register('email', {
              required: { value: true, message: 'Required' },
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Invalid Email',
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
              required: {
                value: true,
                message: 'Require password',
              },
              minLength: {
                value: 8,
                message: 'Require at least 8 characters',
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
              required: {
                value: true,
                message: 'Require confirm password',
              },
              minLength: {
                value: 8,
                message: 'Require at least 8 characters',
              },
            })}
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

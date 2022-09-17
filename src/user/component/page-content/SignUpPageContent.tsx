import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import TextField from '../../../core/components/textField'
import { pagePath } from '../../../core/utils/pagePath'
import WithSignInBackground from '../withSigninBackground'

const SignUpPageContent = () => {
  const router = useRouter()

  const { register, handleSubmit } = useForm<{
    email: string
    password: string
    confirmPassword: string
  }>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    router.push(pagePath.SignUpInfoPage())
  })

  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>

      <WithSignInBackground>
        <h1 className="mb-[90px] font-Inter text-4xl font-bold text-white">
          Create Your <span className="text-sky-500">Meety</span>
        </h1>
        <form
          className="mb-[20px] flex flex-col items-center"
          onSubmit={onSubmit}
        >
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
            hintText="require at least 8 characters"
            useFormRegisterReturn={register('password')}
          />
          <div className="h-[10px]"></div>
          <TextField
            label="Confirm Password"
            placeholder="confirm your password"
            id="confirmPassword"
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

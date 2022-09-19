import Head from 'next/head'
import TextField from '../../../core/components/textField'
import WithSignInBackground from '../withSigninBackground'
import { useForm } from 'react-hook-form'

const SignUpInfoPageContent = () => {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{
    name: string
    surname: string
    date: string
  }>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  });
  
  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>

      <WithSignInBackground>
        <h1 className="mb-[90px] text-4xl font-bold text-white">
          Create Your <span className="text-sky-500">Meety</span>
        </h1>
        <form className="mb-[20px] flex flex-col items-center" onSubmit={onSubmit}>
          <TextField
            label="Name"
            placeholder="enter your name"
            type="text"
            error={errors.name}
            useFormRegisterReturn={register('name', {
              required: {
                value: true,
                message: 'Require name',
              },
            })}
          />
          <div className="h-[10px]"></div>
          <TextField
            label="Surname"
            placeholder="enter your surname"
            type="text"
            error={errors.surname}
            useFormRegisterReturn={register('surname', {
              required: {
                value: true,
                message: 'Require surname',
              },
            })}
          />
          <TextField label="Date of Birth" error={errors.date} type="date" useFormRegisterReturn={register('date', {
              required: {
                value: true,
                message: 'Require date of birth',
              },
            })} />
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

export default SignUpInfoPageContent

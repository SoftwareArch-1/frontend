import Head from 'next/head'
import TextField from '../../../core/components/textField'
import WithSignInBackground from '../withSigninBackground'

const SignUpInfoPageContent = () => {
  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>

      <WithSignInBackground>
        <h1 className="mb-[90px] font-Inter text-4xl font-bold text-white">
          Create Your <span className="text-sky-500">Meety</span>
        </h1>
        <form className="mb-[20px] flex flex-col items-center">
          <TextField
            label="Name"
            placeholder="enter your name"
            id="name"
            type="text"
          />
          <div className="h-[10px]"></div>
          <TextField
            label="Surname"
            placeholder="enter your surname"
            id="surname"
            type="text"
          />
          <TextField label="Date of Birth" id="date" type="date" />
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

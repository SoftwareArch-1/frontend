const WithSignInBackground: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return (
    <div className=" h-screen w-screen bg-signin-bg bg-cover bg-center bg-no-repeat ">
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-700 bg-opacity-30 backdrop-blur-sm">
        {props.children}
      </div>
    </div>
  )
}

export default WithSignInBackground

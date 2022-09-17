const WithSignInBackground: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return (
    <div className="h-full min-h-screen w-screen bg-signin-bg bg-cover bg-center bg-no-repeat">
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-slate-700 bg-opacity-30 p-5 backdrop-blur-sm">
        {props.children}
      </div>
    </div>
  )
}

export default WithSignInBackground

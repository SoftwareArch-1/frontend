interface InterestTagInfo {
  name: string
}

const InterestTag = ({ name }: InterestTagInfo) => {
  return (
    <div className="rounded-full bg-sky-600 px-5 py-1.5 text-center text-xs text-white">
      {name}
    </div>
  )
}

export default InterestTag

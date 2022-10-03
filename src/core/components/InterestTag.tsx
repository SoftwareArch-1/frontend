interface InterestTagInfo {
  name: string
}

const InterestTag = ({ name }: InterestTagInfo) => {
  return (
    <div className="rounded-full bg-orange-500 px-2.5 text-center text-xs text-white">
      {name}
    </div>
  )
}

export default InterestTag

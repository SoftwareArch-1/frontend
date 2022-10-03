import { MouseEventHandler } from 'react'

interface ButtonLongProps {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const ButtonLong = ({ text, onClick }: ButtonLongProps) => {
  return (
    <button
      onClick={onClick}
      className="h-[30px] w-[150px] rounded-[10px] bg-sky-500 text-white"
    >
      {text}
    </button>
  )
}

export default ButtonLong

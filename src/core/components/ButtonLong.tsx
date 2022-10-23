import { MouseEventHandler } from 'react'

interface ButtonLongProps {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disable?: boolean
}

const ButtonLong = ({ text, onClick, disable }: ButtonLongProps) => {
  return (
    <button
      onClick={onClick}
      className="h-[30px] w-[150px] rounded-[10px] bg-sky-500 text-white"
      disabled= {disable? disable: false}
    >
      {text}
    </button>
  )
}

export default ButtonLong

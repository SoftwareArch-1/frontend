import classNames from 'classnames'
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
      className={classNames(
        'h-[30px] w-[150px] rounded-[10px] text-white',
        disable ? 'bg-slate-500' : 'bg-sky-500'
      )}
      disabled={disable ? disable : false}
    >
      {text}
    </button>
  )
}

export default ButtonLong

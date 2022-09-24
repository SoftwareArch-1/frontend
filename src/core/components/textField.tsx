import { ChangeEventHandler, useState } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { IconifyIcon } from './IconifyIcon'
import classNames from 'classnames'

const TextField: React.FC<{
  label: string
  id?: string
  placeholder?: string
  className?: string
  hintText?: string
  type?: string
  error?: FieldError
  useFormRegisterReturn?: UseFormRegisterReturn
}> = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const { useFormRegisterReturn } = props
  let inputType = props.type
  if (props.type === 'password' && showPassword) {
    inputType = 'text'
  }
  return (
    <div className="flex flex-col">
      <label className="flex flex-col text-sm text-white opacity-75">
        {props.label}
        <div className="relative">
          <input
            className={classNames(
              'h-[40px] w-[300px] border-b-2 border-sky-500 bg-transparent text-white placeholder-slate-100 focus:outline-none',
              props.className
            )}
            id={props.id}
            placeholder={props.placeholder}
            type={inputType}
            {...useFormRegisterReturn}
          ></input>
          {props.type === 'password' && (
            <button
              type="button"
              className="absolute top-2 right-3"
              onClick={() => {
                setShowPassword((prev) => !prev)
              }}
            >
              <IconifyIcon
                icon={showPassword ? 'eyeOutline' : 'eyeOffOutline'}
                className="text-white"
              />
            </button>
          )}
        </div>
      </label>

      {props.error && (
        <p className="text-xs text-red-500">{props.error.message}</p>
      )}
      {props.hintText && !props.error && (
        <p className="text-xs text-slate-300">{props.hintText}</p>
      )}
      {!props.hintText && !props.error && (
        <p className="text-xs text-transparent">{props.label}</p>
      )}
    </div>
  )
}

export default TextField

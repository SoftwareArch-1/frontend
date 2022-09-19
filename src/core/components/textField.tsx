import { useState } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { IconifyIcon } from './IconifyIcon'

const TextField: React.FC<{
  label: string
  id: string
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
      <label
        htmlFor={props.id}
        className="font-Inter text-sm text-white opacity-75"
      >
        {props.label}
      </label>
      <div className="relative">
        <input
          className={`h-[40px] w-[300px] border-b-2 border-sky-500 bg-transparent font-Inter text-base text-white placeholder-slate-100 focus:outline-none ${
            props.className ?? ''
          }`}
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

      {props.error && (
        <p className="font-Inter text-xs text-red-500">{props.error.message}</p>
      )}
      {props.hintText && !props.error && (
        <p className="font-Inter text-xs text-slate-300">{props.hintText}</p>
      )}
      {!props.hintText && !props.error && (
        <p className="font-Inter text-xs text-transparent">{props.label}</p>
      )}
    </div>
  )
}

export default TextField

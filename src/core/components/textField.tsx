import { UseFormRegisterReturn } from 'react-hook-form'

const TextField: React.FC<{
  label: string
  id: string
  placeholder?: string
  className?: string
  hintText?: string
  type?: string
  error?: boolean
  errorText?: string
  useFormRegisterReturn?: UseFormRegisterReturn
}> = (props) => {
  const { useFormRegisterReturn } = props
  return (
    <div className="flex flex-col">
      <label
        htmlFor={props.id}
        className="font-Inter text-sm text-white opacity-75"
      >
        {props.label}
      </label>
      <input
        className={`h-[40px] w-[300px] border-b-2 border-sky-500 bg-transparent font-Inter text-base text-white placeholder-slate-100 ${
          props.className ?? ''
        }`}
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        {...useFormRegisterReturn}
      ></input>
      {props.error && (
        <p className="font-Inter text-xs text-red-500">{props.errorText}</p>
      )}
      {props.hintText && !props.error && (
        <p className="font-Inter text-xs text-slate-300">{props.hintText}</p>
      )}
      {!props.hintText && !props.error && <div className="h-[1rem]"></div>}
    </div>
  )
}

export default TextField

import { UseFormRegisterReturn } from 'react-hook-form'

const TextField: React.FC<{
  label: string
  id: string
  placeholder: string
  className?: string
  hintText?: string
  useFormRegisterReturn: UseFormRegisterReturn
}> = (props) => {
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
        ref={props.useFormRegisterReturn.ref}
        onChange={props.useFormRegisterReturn.onChange}
        onBlur={props.useFormRegisterReturn.onBlur}
        name={props.useFormRegisterReturn.name}
      ></input>
      <p
        className={`font-Inter text-xs ${
          props.hintText == null ? 'text-transparent' : 'text-slate-300'
        }`}
      >
        {props.hintText ?? 'asdf'}
      </p>
    </div>
  )
}

export default TextField

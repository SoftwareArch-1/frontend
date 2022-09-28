import classNames from 'classnames'
import { createElement, ReactNode } from 'react'

export interface FillUpBarProps {
  label: string
  value: ReactNode
  /**
   * @default 'li'
   */
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export const FillUpBar = ({
  label,
  value,
  className,
  as = 'li',
}: FillUpBarProps) => {
  return createElement(
    as,
    {
      className: classNames(
        'flex flex-row h-[15px] gap-1 pb-2 items-center',
        className
      ),
    },
    [
      <span 
        className="text-black" 
        key="label">
          {label}
      </span>,
      <div 
        className="h-[10px] w-[120px] rounded-lg bg-black border-radius-[10px] overflow-hidden" 
        key="value">
          <div 
            className="h-[100%] rounded-lg bg-sky-500" 
            style={{width: `${value}%`}}
            key="a">
          </div>
      </div>,
      // <div key ="label">
      //   <div className='column'>
      //     a
      //   </div>
      //   <div className='column'>
      //     b
      //   </div>
      //   {/* <span>{label}</span>
      //   <span className='bg-sky-500'></span> */}
      // </div>
    ]
  )
}

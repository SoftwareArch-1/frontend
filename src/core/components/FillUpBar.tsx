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

export const FillUpBar = ({ label, value }: FillUpBarProps) => {
  return (
    <div className="flex h-[15px] flex-row items-center gap-1 pb-2">
      <span className="text-black" key="label">
        {label}
      </span>
      <div
        className="border-radius-[10px] h-[10px] w-[120px] overflow-hidden rounded-lg bg-black"
        key="value"
      >
        <div
          className="h-[100%] rounded-lg bg-sky-500"
          style={{ width: `${value}%` }}
          key="a"
        ></div>
      </div>
    </div>
  )
}

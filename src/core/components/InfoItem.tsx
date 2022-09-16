import classNames from 'classnames'
import { createElement, ReactNode } from 'react'

export interface InfoItemProps {
  label: string
  value: ReactNode
  /**
   * @default 'li'
   */
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export const InfoItem = ({
  label,
  value,
  className,
  as = 'li',
}: InfoItemProps) => {
  return createElement(
    as,
    {
      className: classNames(
        'flex flex-col gap-1 pb-2 border-b-2 border-sky-500',
        className
      ),
    },
    [
      <span className="font-bold text-black" key="label">
        {label}
      </span>,
      <span className="text-black" key="value">
        {value}
      </span>,
    ]
  )
}

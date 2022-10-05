import classNames from 'classnames'
import dayjs from 'dayjs'
import { ChangeEventHandler, useState } from 'react'

import { IconifyIcon } from './IconifyIcon'

export interface InfoItemProps {
  label: string
  value: string
  className?: string
  /**
   * @default false
   */
  editable?: boolean
  type?: 'text' | 'email' | 'date'
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * When the `check` icon is clicked
   */
  onSave?: () => void
}

export const InfoItem = ({
  label,
  value,
  className,
  onSave,
  onChange,
  type = 'text',
  editable = false,
}: InfoItemProps) => {
  const [editing, setEditing] = useState(false)

  return (
    <div
      className={classNames(
        'flex flex-col gap-1 border-b-2 border-sky-500 pb-2',
        className
      )}
    >
      <span
        className="flex items-center justify-between font-bold text-black"
        key="label"
      >
        <span>{label}</span>
        {true && (
          <>
            {!editing && (
              <IconifyIcon
                icon="pencil"
                className="text-sky-500"
                onClick={() => {
                  setEditing((prev) => !prev)
                }}
              />
            )}
            {editing && (
              <div className="flex gap-x-5">
                <IconifyIcon
                  icon="close-thick"
                  className="text-slate-500"
                  onClick={() => {
                    setEditing((prev) => !prev)
                  }}
                />
                <button>
                  <IconifyIcon
                    icon="check-bold"
                    className="text-sky-500"
                    onClick={() => {
                      onSave?.()
                      setEditing((prev) => !prev)
                    }}
                  />
                </button>
              </div>
            )}
          </>
        )}
      </span>

      {editing && (
        <input
          type={type}
          className="text-black"
          onChange={(e) => {
            onChange?.(e)
            if (type === 'date') {
              setEditing((prev) => !prev)
              onSave?.()
            }
          }}
          key="value"
          value={value}
        />
      )}

      {!editing && (
        <span className="text-black">
          {type === 'date' ? dayjs(value).format('DD MMM YYYY') : value}
        </span>
      )}
    </div>
  )
}

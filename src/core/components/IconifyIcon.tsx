import classNames from 'classnames'

import { Icon, IconProps } from '@iconify/react'

import { SafeOmit } from '../utils/types'

// install vscode extension https://marketplace.visualstudio.com/items?itemName=antfu.iconify, trust me 👌😎

const availableIcons = {
  partyPopper: 'mdi:party-popper',
  eyeOffOutline: 'mdi:eye-off-outline',
  eyeOutline: 'mdi:eye-outline',
  pencil: 'mdi:pencil',
  'close-thick': 'mdi:close-thick',
  'check-bold': 'mdi:check-bold',
  magnify: 'mdi:magnify',
} as const

/**
 * The same props as `Icon` but with more specific `icon` prop type.
 */
export type IconifyProps = SafeOmit<IconProps, 'icon'> & {
  icon: keyof typeof availableIcons
}

/**
 * @example
 * <IconifyIcon icon="partyPopper" />
 */
export const IconifyIcon = ({ className, icon, ...rest }: IconifyProps) => {
  return (
    <Icon
      icon={availableIcons[icon]}
      className={classNames(
        'min-h-[20px] min-w-[20px] cursor-pointer',
        className
      )}
      {...rest}
    />
  )
}

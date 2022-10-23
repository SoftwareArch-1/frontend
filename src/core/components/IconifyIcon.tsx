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
  'calendar-month': 'mdi:calendar-month',
  account: 'mdi:account',
  'map-marker': 'mdi:map-marker',
  filter: 'mdi:filter',
  sort: 'mdi:sort',
  plus: 'mdi:plus',
  close: 'mdi:close',
  check: 'mdi:check',
  line: 'bi:line',
  discord: 'bi:discord',
  starOultine: 'material-symbols:star-outline',
  starSolid: 'material-symbols:star',
  heartOutline: 'ant-design:heart-outlined',
  heartSolid: 'ant-design:heart-filled',
  lineIcon: 'bi:line',
  discordIcon: 'logos:discord-icon',
  party: 'bx:party',
  'account-group': 'mdi:account-group',
  logout: 'mdi:logout',
  'ios-back': 'eva:arrow-ios-back-fill',
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

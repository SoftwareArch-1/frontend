import create from 'zustand'

import { User } from '../core/sync-with-backend/dto/user/user'

interface UserStore extends Partial<User> {
  /**
   * @example
   * // 3 equivalent ways to update the store
   * // 1
   * update((prev) => ({ ...prev, name: 'new name' }))
   * // 2
   * update(() => ({ name: 'new name' }))
   * // 3
   * update({ name: 'new name' })
   */
  update: (
    updater: ((prev: Partial<User>) => Partial<User>) | Partial<User>
  ) => void
}

export const useUserStore = create<UserStore>()((set, get) => ({
  email: undefined,
  id: undefined,
  name: undefined,
  surname: undefined,
  birthday: undefined,
  detail: undefined,

  update: (updater) => {
    const prev = get()
    const partial = typeof updater === 'function' ? updater(prev) : updater
    set((state) => ({ ...state, ...partial }))
  },
}))

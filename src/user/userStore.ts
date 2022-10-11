import create from 'zustand'

import { User } from '../core/sync-with-backend/dto/user/user'

type Store = User & {
  accessToken: string
}

interface UserStore extends Partial<Store> {
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
    updater: ((prev: Partial<Store>) => Partial<Store>) | Partial<Store>
  ) => void
}

export const useUserStore = create<UserStore>()((set, get) => ({
  email: undefined,
  id: undefined,
  name: undefined,
  surname: undefined,
  birthDate: undefined,
  description: undefined,
  discord: undefined,
  line: undefined,
  accessToken: undefined,

  update: (updater) => {
    const prev = get()
    const partial = typeof updater === 'function' ? updater(prev) : updater
    set((state) => ({ ...state, ...partial }))
  },
}))

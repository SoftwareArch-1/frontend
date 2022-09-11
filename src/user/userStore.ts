import create from 'zustand'

import { User } from '../core/sync-with-backend/dto/user/user'

interface UserStore extends Partial<User> {
  update: (
    updater: ((prev: Partial<User>) => Partial<User>) | Partial<User>
  ) => void
}

export const useUserStore = create<UserStore>()((set, get) => ({
  email: undefined,
  id: undefined,
  name: undefined,
  surname: undefined,

  update: (updater) => {
    const prev = get()
    const partial = typeof updater === 'function' ? updater(prev) : updater
    set((state) => ({ ...state, ...partial }))
  },
}))

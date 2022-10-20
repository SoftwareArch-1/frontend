import create from 'zustand'
import { persist } from 'zustand/middleware'

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
  reset: () => void
}

const initState = {
  email: undefined,
  id: undefined,
  name: undefined,
  surname: undefined,
  birthDate: undefined,
  description: undefined,
  discordId: undefined,
  lineId: undefined,
  accessToken: undefined,
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      ...initState,

      update: (updater) => {
        const prev = get()
        const partial = typeof updater === 'function' ? updater(prev) : updater
        set((state) => ({ ...state, ...partial }))
      },
      reset: () => set({ ...initState }),
    }),
    {
      name: 'user-storage', // unique name
      serialize: (state) => JSON.stringify(state),
      deserialize: (str) => {
        let state = JSON.parse(str)
        state.state.birthDate = new Date(state.state.birthDate)
        return state
      },
    }
  )
)

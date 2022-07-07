import create from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeMode = {
    darkMode: boolean,
    setDarkMode: () => void
}

const store = persist<ThemeMode>((set) => ({
    darkMode: false,
    setDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
}),
    {
        name: 'my-theme', // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
)

export const useStore = create(store)


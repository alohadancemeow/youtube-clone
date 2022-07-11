import create from 'zustand'
import { persist } from 'zustand/middleware'

type AppState = {
    darkMode: boolean,
    setDarkMode: () => void,
    open: boolean,
    setOpen: () => void
}

const store = persist<AppState>((set) => ({
    darkMode: false,
    setDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    open: false,
    setOpen: () => set((state) => ({ open: !state.open }))
}),
    {
        name: 'my-theme', // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
)

export const useStore = create(store)


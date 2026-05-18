import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AppStoreProps, initialUserData, ThemeApp, User } from "./interface";

export const useAppStore = create<AppStoreProps>()(
  persist(
    (set) => ({
      users: [],
      currentUser: initialUserData,
      setUser: (userData: User) => set((state) => ({ currentUser: userData })),
      clearUser: () => set((state) => ({ currentUser: initialUserData })),
      getUsers: (usersData: User[]) => set((state) => ({ users: usersData })),
      theme: ThemeApp.dark,
    }),
    {
      name: "users-app-storage",
      //* Storage in localStorage for default, also without include the parameter.
      storage: createJSONStorage(() => sessionStorage),
      //* For default 'persist' saves all object and arrays
      partialize: (state) => ({
        users: state.users,
        currentUser: state.currentUser,
      }),
    },
  ),
);

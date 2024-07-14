import {create} from "zustand"

const useAuthStore = create((set) => ({
   user:JSON.parse(localStorage.getItem("user-info")),
   login: (user) => set({user}),
   logout: (user) => set({user: null}),
   setUser: (user) => setUser({user})
}))

export default useAuthStore
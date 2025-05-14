import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => {
        set({ user });
        localStorage.setItem('rp_user', JSON.stringify(user));
    },
    clearUser: () => {
        set({ user: null });
        localStorage.removeItem('rp_user');
    },
    restoreUser: () => {
        const user = JSON.parse(localStorage.getItem('rp_user'));
        set({ user });
        return user;
    }
}));

export default useUserStore;
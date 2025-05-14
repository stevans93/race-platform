import { create } from 'zustand';

const useAuthStore = create((set) => ({
    token: null,
    setToken: (token) => {
        set({ token });
        localStorage.setItem('rp_token', token);
    },
    clearToken: () => {
        set({ token: null });
        localStorage.removeItem('rp_token');
    },
    restoreToken: () => {
        const token = JSON.parse(localStorage.getItem('rp_token'));
        set({ token });
        return token;
    }
}));

export default useAuthStore;
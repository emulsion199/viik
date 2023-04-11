import { create } from 'zustand';

interface Props {
   isLogin: boolean;
   setLogin: () => void;
   setLogout: () => void;
}

const useAuthStore = create<Props>(set => ({
   isLogin: false,
   setLogin: () => set(state => ({ isLogin: true })),
   setLogout: () => set(state => ({ isLogin: false })),
}));

export default useAuthStore;

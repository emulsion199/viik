import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface Props {
   isLogin: boolean;
   setLogin: () => void;
   setLogout: () => void;
}

export const useAuthStore = create<Props>()(
   persist(
      set => ({
         isLogin: false,
         setLogin: () => set(state => ({ isLogin: true })),
         setLogout: () => set(state => ({ isLogin: false })),
      }),
      {
         name: 'adminlogin',
      }
   )
);
// const useAuthStore = create<Props>(
//    persist(
//       set => ({
//          isLogin: false,
//          setLogin: () => set(state => ({ isLogin: true })),
//          setLogout: () => set(state => ({ isLogin: false })),
//       }),
//       { name: 'AdminLogin' getStorage:() => localStorage,}
//    )
// );

export default useAuthStore;

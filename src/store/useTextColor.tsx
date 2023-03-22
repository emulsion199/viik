import { create } from 'zustand';

interface Props {
   isBgDark: boolean;
   setIsBgDark: (previous: boolean) => void;
}

const useTextColorStore = create<Props>(set => ({
   isBgDark: false,
   setIsBgDark: (isDark: boolean) => set(state => ({ isBgDark: isDark })),
}));

export default useTextColorStore;

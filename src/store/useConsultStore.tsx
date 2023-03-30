import { create } from 'zustand';

interface Props {
   level: number;
   setLevel: (level: number) => void;
}

const useConsultStore = create<Props>(set => ({
   level: 1,
   setLevel: (level: number) => set(state => ({ level: level })),
}));

export default useConsultStore;

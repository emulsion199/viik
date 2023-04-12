import { create } from 'zustand';
type Option = { title: string; option: string };
interface Props {
   options: Option[];
   setOptions: (options: Option[]) => void;
   setInit: () => void;
}
const useOrderStore = create<Props>(set => ({
   options: [],
   setOptions: (options: Option[]) => set(state => ({ options: options })),
   setInit: () => set(() => ({ options: [] })),
}));

export default useOrderStore;

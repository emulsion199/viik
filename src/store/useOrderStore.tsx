import { create } from 'zustand';
type Option = { title: string; option: string };
interface Props {
   name: string;
   options: Option[];
   setName: (name: string) => void;
   setOptions: (options: Option[]) => void;
   setInit: () => void;
}
const useOrderStore = create<Props>(set => ({
   options: [],
   name: '-',
   setName: (name: string) => set(state => ({ name: name })),
   setOptions: (options: Option[]) => set(state => ({ options: options })),
   setInit: () => set(() => ({ options: [], name: '-' })),
}));

export default useOrderStore;

import { create } from 'zustand';

interface Props {
   imageId: number;
   setImageId: (imageId: number) => void;
}

const useBgStore = create<Props>(set => ({
   imageId: 1,
   setImageId: (imageId: number) => set(state => ({ imageId: imageId })),
}));

export default useBgStore;

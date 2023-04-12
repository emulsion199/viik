import { useMount } from '#hooks/useMount';
import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface Props {
   imglink: string[];
}
const DesktopCarousel = (props: Props) => {
   const { imglink } = props;

   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);

   const [selectedIndex, setSelectedIndex] = useState(1);
   React.useEffect(() => {
      if (emblaApi) {
         setSelectedIndex(emblaApi.selectedScrollSnap());
         emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
      }
   }, [emblaApi]);

   const mount = useMount();
   return (
      <>
         {mount && (
            <div className={'relative overflow-hidden aspect-[5/6]'} ref={emblaRef}>
               <div className={'row h-full'}>
                  {imglink.map((it, idx) => (
                     <div
                        style={{
                           flex: '0 0 100%',
                           backgroundImage: it,
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           backgroundRepeat: 'no-repeat',
                        }}
                        key={idx}
                     ></div>
                  ))}
               </div>
               <button className={'row absolute bottom-[10px] right-[10px] items-center'}>
                  <span className={'row  text-gray-2 text-p2'}>
                     {selectedIndex + 1}
                     <span className={'text-gray-200'}>/{imglink.length}</span>
                  </span>
               </button>
            </div>
         )}
      </>
   );
};
export default DesktopCarousel;

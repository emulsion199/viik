import { useMount } from '#hooks/useMount';
import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

const DesktopCarousel = () => {
   const slides = [1, 2, 3, 4];

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
                  {slides.map((it, idx) => (
                     <div
                        style={{
                           flex: '0 0 100%',

                           backgroundImage: 'url(' + `/shop/shop_${it}.png` + ')',
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           backgroundRepeat: 'no-repeat',
                        }}
                        key={idx}
                     ></div>
                  ))}
               </div>
               <button className={'row absolute bottom-[10px] right-[10px] items-center'}>
                  <p className={'row  text-gray-2 text-p2'}>
                     {selectedIndex + 1}
                     <p className={'text-gray-200'}>/{slides.length}</p>
                  </p>
               </button>
            </div>
         )}
      </>
   );
};
export default DesktopCarousel;

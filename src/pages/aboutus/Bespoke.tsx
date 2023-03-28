import { useMobile } from '#hooks/useMobile';
import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import ICON_LOGO from '#assets/logo/default.svg';
import ICON_CIRCLE_FILL from '#assets/icons/circle/circle_fill.svg';
import ICON_CIRCLE_UNFILL from '#assets/icons/circle/circle_unfill.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { BespokeData } from '#constants/bespokeData';

const Bespoke = () => {
   const [number, setNumber] = useState<number>(0);
   const [chooseNumber, setChooseNumber] = useState<number[]>([]);
   const mobile = useMobile();
   const [circles, setCircles] = useState<ReactNode[]>([
      <Image src={ICON_CIRCLE_UNFILL} width={mobile ? 8 : 15} height={mobile ? 7 : 13} alt='circle_unfill' />,
      <Image src={ICON_CIRCLE_UNFILL} width={mobile ? 8 : 15} height={mobile ? 7 : 13} alt='circle_unfill' />,
      <Image src={ICON_CIRCLE_UNFILL} width={mobile ? 8 : 15} height={mobile ? 7 : 13} alt='circle_unfill' />,
   ]);

   useEffect(() => {
      if (number > 0 && number < 4) {
         setCircles(circles => {
            let newCircles = [...circles];
            newCircles[number - 1] = <Image src={ICON_CIRCLE_FILL} width={mobile ? 8 : 15} height={mobile ? 7 : 13} alt='circle_fill' />;
            return newCircles;
         });
      }
   }, [number]);
   const Bespoke_Main = () => {
      const mobile = useMobile();
      return (
         <div className='column center'>
            <span className='text-center text-p2 md:text-p3 font-medium mb-5'>
               나만의 비스포크를 찾아보세요.
               <br /> 더 깊이 나를 이해하고, 진정한 나를 발견하세요.
            </span>
            <span className='text-center text-lg leading-[21px] font-light mb-20 text-green'>
               Discover your ideal Bespoke.
               <br /> Determine your Bespoke to understand <br />
               how your internal clock works.
            </span>
            {mobile && <Image className='invert mb-20' src={ICON_LOGO} width={80} height={70} alt='mainlogo' />}
            <button
               onClick={() => setNumber(previous => previous + 1)}
               className='w-[327px] md:w-[380px] h-[60px] bg-black text-white text-p3 font-medium'
            >
               테스트 시작하기
            </button>
         </div>
      );
   };

   const Bespoke_Template = () => {
      const data = BespokeData.filter(data => data.id === number)[0];
      const { id, title, subtitle, items } = data;

      return (
         <AnimatePresence>
            <div className='column center'>
               <motion.div className='row space-x-[38px] mb-6'>{circles.map(circle => circle)}</motion.div>
               <motion.div
                  className='column center'
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: '0%', transition: { duration: 0.7 } }}
               >
                  <div className=' center flex flex-col-reverse md:flex-col gap-4'>
                     <span className='text-center text-lg leading-[21px] md:text-[40px] md:leading-[62px] font-light text-primary'>
                        {title}
                     </span>
                     <span className='text-center text-p2 md:text-h1 font-medium'>{subtitle}</span>
                  </div>
                  <div className='column min-w-[327px] w-[95%] md:w-[380px] max-w-[380px] space-y-5 mt-14'>
                     {items.map(item => {
                        return (
                           <button
                              onClick={() => {
                                 setNumber(number => Math.min(number + 1, 3));
                                 setChooseNumber(previous => [...previous, item.items_id]);
                              }}
                              key={item.items_id}
                              className='h-14 text-p2 bg-white text-black md:text-p3 font-medium hover:bg-black hover:text-white'
                           >
                              {item.title}
                           </button>
                        );
                     })}
                  </div>
               </motion.div>
            </div>
         </AnimatePresence>
      );
   };

   return number === 0 ? <Bespoke_Main /> : <Bespoke_Template />;
};

export default Bespoke;

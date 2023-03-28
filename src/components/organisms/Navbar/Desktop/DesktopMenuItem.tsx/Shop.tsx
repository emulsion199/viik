import React from 'react';
import Image from 'next/image';
import ICON_MainLogo from '#assets/logo/default.svg';
const Shop = () => {
   const [focused, setFocused] = React.useState(false);

   return (
      <span className='w-full h-full column '>
         <div className={'row gap-[102px] items-start'}>
            <span className='text-white'>SHOP</span>
            <div className={'column gap-5'}>
               <span className='text-white'>View all</span>
               <span className='text-white'>Sofa</span>
               <span className='text-white'>Table</span>
            </div>
            <Image className={''} src={ICON_MainLogo} alt={'logo'} width={80} height={70} />
         </div>
         <input
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={'focus: outline-none text-white mt-[40px] h-[30px] bg-transparent w-[260px] border-b border-white'}
            placeholder={'무엇을 찾고 계신가요?'}
         ></input>
         {focused && (
            <div className={'row text-white mt-6'}>
               <span className='flex-1'>{'쇼파123123'}</span>
               <span className='flex-1'>{'쇼파234234'}</span>
               <span className='flex-1'>{'쇼파345345'}</span>
            </div>
         )}
      </span>
   );
};

export default Shop;

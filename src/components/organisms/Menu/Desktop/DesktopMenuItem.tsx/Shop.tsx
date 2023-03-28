import React from 'react';
import Image from 'next/image';
import ICON_MainLogo from '#assets/logo/default.svg';
const Shop = () => {
   return (
      <span className='w-full h-full column '>
         <div className={'row gap-[102px] items-start'}>
            <span className='text-white'>SHOP</span>
            <div className={'column gap-5'}>
               <span className='text-white'>View all</span>
               <span className='text-white'>Sofa</span>
               <span className='text-white'>Table</span>
            </div>
            <Image className={'mt-[-20px]'} src={ICON_MainLogo} alt={'logo'} width={80} height={70} />
         </div>
         <input
            className={'focus: outline-none text-white mt-[40px] h-[30px] bg-transparent w-[260px] border-b border-white'}
            placeholder={'무엇을 찾고 계신가요?'}
         ></input>
      </span>
   );
};

export default Shop;

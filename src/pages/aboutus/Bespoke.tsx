import { useMobile } from '#hooks/useMobile';
import Image from 'next/image';
import React from 'react';
import ICON_LOGO from '#assets/logo/default.svg';

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
         <button className='w-[327px] md:w-[380px] h-[60px] bg-black text-white text-p3 font-medium'>테스트 시작하기</button>
      </div>
   );
};

const Bespoke_First = () => {};
const Bespoke = () => {
   return <Bespoke_Main />;
};

export default Bespoke;

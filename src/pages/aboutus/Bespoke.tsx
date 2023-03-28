import React from 'react';

const Bespoke = () => {
   return (
      <div className='min-w-[375px] column center'>
         <span className='text-center text-p2 md:text-p3 font-medium mb-5'>
            나만의 비스포크를 찾아보세요.
            <br /> 더 깊이 나를 이해하고, 진정한 나를 발견하세요.
         </span>
         <span className='text-center text-lg leading-[21px] font-light mb-20'>
            Discover your ideal Bespoke.
            <br /> Determine your Bespoke to understand <br />
            how your internal clock works.
         </span>
         <button className='w-[95%] h-[60px] bg-black text-white text-p3 font-medium'>테스트 시작하기</button>
      </div>
   );
};

export default Bespoke;

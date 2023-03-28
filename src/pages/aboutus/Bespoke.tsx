import { useMobile } from '#hooks/useMobile';
import Image from 'next/image';
import React, { useState } from 'react';
import ICON_LOGO from '#assets/logo/default.svg';
import ICON_CIRCLE_FILL from '#assets/icons/circle/circle_fill.svg';
import ICON_CIRCLE_UNFILL from '#assets/icons/circle/circle_unfill.svg';

const BespokeData = [
   {
      id: 1,
      title: 'Where are you at the most comfortable moment? ',
      subtitle: '가장 편안한 순간의 당신은 어디에 있나요?',
      items: [
         {
            items_id: 1,
            title: '일과 후 혼자만의 시간을 누릴 수 있는 공간',
         },
         {
            items_id: 2,
            title: '위로 받을 수 있는 소중한 사람과 함께하는 공간',
         },
         {
            items_id: 3,
            title: '새로운 하루를 맞이하는 활력을 얻을 수 있는 공간',
         },
         {
            items_id: 4,
            title: '반려동물이 나를 맞이하는 공간',
         },
      ],
   },
   {
      id: 2,
      title: 'What do you look like at the most comfortable moment for you? ',
      subtitle: '나에게 가장 편안한 순간, 당신은 어떤 모습인가요?',
      items: [
         {
            items_id: 1,
            title: '고요하고, 아무 생각이 들지 않는다.',
         },
         {
            items_id: 2,
            title: '힘들었던 순간을 모두 털어내는 중이다.',
         },
         {
            items_id: 3,
            title: '일과는 분리된, 나만의 자아에 집중한다.',
         },
         {
            items_id: 4,
            title: '나를 웃게 만들어주는 일들에 집중한다.',
         },
      ],
   },
   {
      id: 3,
      title: 'What made you uncomfortable today? ',
      subtitle: '오늘 하루, 어떤 것이 당신을 불편하게 만들었나요?',
      items: [
         {
            items_id: 1,
            title: '업무나 주변 사람 등 나를 둘러싼 환경',
         },
         {
            items_id: 2,
            title: '스스로에 대한 고민',
         },
         {
            items_id: 3,
            title: '마음에 들지 않는 나의 공간',
         },
         {
            items_id: 4,
            title: '없다. 평온했던 오늘 하루.',
         },
      ],
   },
];

const Bespoke = () => {
   const [number, setNumber] = useState<number>(0);
   const [chooseNumber, setChooseNumber] = useState<number[]>([]);
   const mobile = useMobile();
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
      const data_length = [1, 2, 3];
      return (
         <div className='column center'>
            <div className='row space-x-[38px] mb-6'>
               {data_length.map(a => {
                  if (a <= number) {
                     return <Image src={ICON_CIRCLE_FILL} width={mobile ? 8 : 15} height={mobile ? 7 : 13} alt='circle_fill' />;
                  } else {
                     return <Image src={ICON_CIRCLE_UNFILL} width={mobile ? 8 : 15} height={mobile ? 7 : 13} alt='circle_fill' />;
                  }
               })}
            </div>
            <div className='column center'>
               <span className='text-center text-lg leading-[21px] md:text-[40px] md:leading-[62px] font-light text-primary mb-2'>
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
         </div>
      );
   };

   return number === 0 ? <Bespoke_Main /> : <Bespoke_Template />;
};

export default Bespoke;

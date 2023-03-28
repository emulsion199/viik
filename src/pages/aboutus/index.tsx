import React from 'react';
import RootTemplate from '#components/Template/RootTemplate';
import { Tab } from '@headlessui/react';
import { cc } from '#utils/string';
import Image from 'next/image';
import DesktopFooter from '#components/organisms/Footer/Desktop';
const index = () => {
   return (
      <RootTemplate>
         <Tab.Group>
            <Tab.List className='h-12 w-full border-b border-b-gray-3 row sm:text-p3 text-p2 font-medium'>
               <Tab className={'w-1/2 aria-selected:bg-primary aria-selected:text-white outline-none'}>VIIK</Tab>
               <Tab className={'w-1/2 aria-selected:bg-primary aria-selected:text-white outline-none'}>BESPOKE</Tab>
            </Tab.List>
            <Tab.Panels>
               <Tab.Panel className={'column center py-[110px] sm:py-[220px] bg-bg-default'}>
                  <div className='column center sm:text-[62px] sm:leading-[62px] mb-11 text-h1 leading-[26px]'>
                     <span>VIIK : Visualize individual ideal,</span>
                     <span>and Keep yourself.</span>
                     <span>Fill your space, Fulfill Yourself.</span>
                  </div>
                  <div className='relative w-full h-[451px] sm:w-[680px] sm:h-[817px] mb-10'>
                     <Image className='absolute' src={'/img/aboutus.png'} fill alt='aboutus.png'></Image>
                  </div>
                  <span className='sm:w-[600px] w-[325px] h-auto text-p2 font-medium mb-5'>
                     각자가 정의하는 ‘좋은 집’의 의미는 다양하겠지만 궁극적으로 가장 편안할 수 있는 공간, 즉 ‘내가 나일 수 있는 공간’이 좋은
                     집이 될 것입니다. 타인과 부대끼는 사회 속에서, 우리는 어쩔 수 없이 규격화된 시간과 공간 속에서 살아갑니다. 알게 모르게
                     스며드는 피곤함으로부터 안전할 수 있는 공간은 필수적입니다. 그렇기에 집은 오롯이 나에게 집중할 수 있는 공간이 되어야
                     합니다. 일말의 허물없이 나로써 취하는 휴식을 통해 더 깊이 나를 이해하고, 오롯이 나에게 집중할 수 있습니다. ‘집’이라는
                     공간은 휴식과 안정을 제공하는 삶의 보금자리입니다. 이 공간에서 장시간 몸을 기대는 가구는 당연히 편안해야 합니다.
                     시각적으로도, 신체적으로도, 정신적으로도 편안함을 느낄 수 있어야 합니다. 누군가 만들어둔 편안함의 기준에 스스로를
                     맞추지 마세요. 시간이 지날수록 깊어지는 편안함은 더욱 ‘나다운 나’를 이뤄내 줍니다.
                  </span>
                  <span className='sm:w-[600px] w-[325px] h-auto text-p3 leading-[25px]'>
                     The meaning of "good house" that each person defines will vary, but ultimately, the most comfortable space, the space
                     where I can be, will be a good house. In a society where we associate with others, we are forced to live in
                     standardized time and space. A space where you can be safe from fatigue that permeates without knowing is essential.
                     Therefore, the house should be a space where you can focus on yourself. I can understand myself more deeply and focus
                     on myself through the rest I take without any fault. The space called "home" is a home for life that provides rest and
                     stability. Furniture leaning for a long time in this space should of course be comfortable. You should be able to feel
                     comfortable visually, physically, and mentally. Don't adjust yourself to the standard of comfort someone has created.
                     The comfort that gets deeper as time goes by makes me more "me like myself."{' '}
                  </span>
               </Tab.Panel>
               <Tab.Panel>content2</Tab.Panel>
            </Tab.Panels>
         </Tab.Group>
         <DesktopFooter />
      </RootTemplate>
   );
};

export default index;

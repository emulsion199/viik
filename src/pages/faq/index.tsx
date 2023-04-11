import ICON_ARROW_DOWN from '#assets/icons/arrow/arrow_down.svg';
import ICON_ARROW_UP from '#assets/icons/arrow/arrow_up.svg';
import DesktopFooter from '#components/organisms/Footer/Desktop';
import MobileFooter from '#components/organisms/Footer/Mobile';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import RootTemplate from '#components/Template/RootTemplate';
import { FaqCategory, FaqItems } from '#constants/faq';
import { useMobile } from '#hooks/useMobile';
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import useBgStore from 'src/store/useTextColor';

const FAQ = () => {
   const { setImageId } = useBgStore();
   React.useEffect(() => {
      setImageId(3);
   }, []);
   const mobile = useMobile();
   const FaqData: FaqCategory[] = FaqItems;

   return (
      <RootTemplate>
         <div className='w-screen bg-white pb-[100px]'>
            {mobile ? (
               <MobileNavbar />
            ) : (
               <div className={'w-full sticky top-0 backdrop-blur-sm'}>
                  <DesktopNavbar />
               </div>
            )}
            <div className='center column'>
               <span className='text-h1 font-medium my-[70px] '>FAQ</span>
               <div className='flex flex-col space-y-20'>
                  {FaqData.map(data => {
                     return (
                        <div className='column center md:flex-row md:space-x-20 md:items-start' key={data.title}>
                           <span className='mb-10 md:mb-0 w-22 h-full text-p3 font-bold'>{data.title}</span>
                           <span className='flex flex-col space-y-5 max-w-[686px] min-w-[327px] w-screen px-5'>
                              {data.items.map(item => {
                                 return (
                                    <Disclosure key={item.question}>
                                       {({ open }) => (
                                          <span className={open ? 'bg-bg-default' : 'bg-gray-4'}>
                                             <Disclosure.Button className=' w-full rounded-sm py-3 px-4 text-p3 font-medium text-start relative'>
                                                {item.question}
                                                {open ? (
                                                   <Image
                                                      className='absolute top-[50%] right-3'
                                                      src={ICON_ARROW_UP}
                                                      width={8}
                                                      height={5}
                                                      alt='arrow_up'
                                                   />
                                                ) : (
                                                   <Image
                                                      className='absolute top-[50%] right-3'
                                                      src={ICON_ARROW_DOWN}
                                                      width={8}
                                                      height={5}
                                                      alt='arrow_down'
                                                   />
                                                )}
                                             </Disclosure.Button>
                                             <Disclosure.Panel className=' py-3 px-4 text-p3 font-medium'>{item.answer}</Disclosure.Panel>
                                          </span>
                                       )}
                                    </Disclosure>
                                 );
                              })}
                           </span>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
         {mobile ? <MobileFooter /> : <DesktopFooter />}
      </RootTemplate>
   );
};

export default FAQ;

import CommunityItem from '#components/organisms/Community/CommunityItem';
import DesktopFooter from '#components/organisms/Footer/Desktop';
import MobileFooter from '#components/organisms/Footer/Mobile';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import RootTemplate from '#components/Template/RootTemplate';

import { PATH } from '#constants/path';
import { useMobile } from '#hooks/useMobile';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import useBgStore from 'src/store/useTextColor';

const Info = () => {
   const { setImageId } = useBgStore();
   React.useEffect(() => {
      setImageId(3);
   }, []);
   const mobile = useMobile();

   return (
      <RootTemplate>
         <div className='flex w-screen bg-bg-default pb-[100px] flex-col min-h-screen'>
            {mobile ? (
               <MobileNavbar />
            ) : (
               <motion.div className={'w-full sticky top-0 backdrop-blur-sm'} layoutId='navbar'>
                  <DesktopNavbar />
               </motion.div>
            )}
            <div className='center column w-screen'>
               <span className='text-h1 font-medium my-[60px]'>Community</span>
               <div className='row w-full justify-center space-x-40'>
                  <Tab.Group defaultIndex={1}>
                     <Tab.List className={'flex flex-col space-y-5 items-start w-16'}>
                        <Link href={PATH.promotion}>
                           <Tab className={'outline-none text-p3 text-gray-2 font-medium aria-selected:text-black'}>프로모션</Tab>
                        </Link>
                        <Link href={PATH.info}>
                           <Tab className={'outline-none text-p3 text-gray-2 font-medium aria-selected:text-black'}>공지</Tab>
                        </Link>
                        <Link href={PATH.review}>
                           <Tab className={'outline-none text-p3 text-gray-2 font-medium aria-selected:text-black'}>리뷰</Tab>
                        </Link>
                     </Tab.List>
                     <Tab.Panels className={'column w-[686px]'}>
                        <Tab.Panel className={'space-y-10'}></Tab.Panel>
                        <Tab.Panel className={'space-y-10'}>
                           <CommunityItem title={'VIIK'} link='' />
                           <CommunityItem title={'VIIK'} link='' />
                        </Tab.Panel>
                        <Tab.Panel className={'space-y-10'}></Tab.Panel>
                     </Tab.Panels>
                  </Tab.Group>
               </div>
            </div>
         </div>
         {mobile ? <MobileFooter /> : <DesktopFooter />}
      </RootTemplate>
   );
};

export default Info;

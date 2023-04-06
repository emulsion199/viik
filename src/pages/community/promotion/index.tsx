import CommunityItem from '#components/organisms/Community/CommunityItem';
import MenuIndex from '#components/organisms/Community/MenuIndex/MenuIndex';
import DesktopFooter from '#components/organisms/Footer/Desktop';
import MobileFooter from '#components/organisms/Footer/Mobile';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import RootTemplate from '#components/Template/RootTemplate';

import { PATH } from '#constants/path';
import { useMobile } from '#hooks/useMobile';
import { useMount } from '#hooks/useMount';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import useBgStore from 'src/store/useTextColor';

const Promotion = () => {
   const { setImageId } = useBgStore();
   React.useEffect(() => {
      setImageId(3);
   }, []);
   const mobile = useMobile();
   const mount = useMount();
   return (
      mount && (
         <RootTemplate>
            <div className='flex w-screen bg-bg-default pb-[100px] flex-col min-h-screen'>
               {mobile ? (
                  <MobileNavbar />
               ) : (
                  <div className={'w-full sticky top-0 backdrop-blur-sm'}>
                     <DesktopNavbar />
                  </div>
               )}

               <div className='center column w-screen'>
                  <span className='text-h1 font-medium my-[60px]'>Community</span>
                  <div className='row w-full justify-center space-x-40'>
                     <MenuIndex selectedIndex={0} />
                     <div className='column w-[686px]'>
                        <div className='space-y-10'>
                           <CommunityItem title={'VIIK'} link='' />
                           <CommunityItem title={'VIIK'} link='' />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {mobile ? <MobileFooter /> : <DesktopFooter />}
         </RootTemplate>
      )
   );
};

export default Promotion;

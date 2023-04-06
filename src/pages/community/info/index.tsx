import CommunityItem from '#components/organisms/Community/CommunityItem';
import MenuIndex from '#components/organisms/Community/MenuIndex/MenuIndex';
import DesktopFooter from '#components/organisms/Footer/Desktop';
import MobileFooter from '#components/organisms/Footer/Mobile';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import RootTemplate from '#components/Template/RootTemplate';
import SecondaryTemplate from '#components/Template/SecondaryTemplate';

import { PATH } from '#constants/path';
import { useMobile } from '#hooks/useMobile';
import { useMount } from '#hooks/useMount';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import useBgStore from 'src/store/useTextColor';

const Info = () => {
   const mobile = useMobile();
   return (
      <SecondaryTemplate>
         <div className='flex flex-col justify-center items-center w-screen'>
            {!mobile && <span className='text-h1 font-medium my-[60px]'>Community</span>}
            <div className='flex flex-col w-full justify-center md:space-x-40 md:flex-row '>
               <MenuIndex selectedIndex={1} />
               <div className='flex flex-col justify-center items-center max-w-[686px] w-full space-y-10 px-4 mt-10 md:mt-0'>
                  <CommunityItem title={'VIIK'} link={PATH.info_detail} />
                  <CommunityItem title={'VIIK'} link={PATH.info_detail} />
               </div>
            </div>
         </div>
      </SecondaryTemplate>
   );
};

export default Info;

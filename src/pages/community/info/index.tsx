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
   return (
      <SecondaryTemplate>
         <div className='center column w-screen'>
            <span className='text-h1 font-medium my-[60px]'>Community</span>
            <div className='row w-full justify-center space-x-40'>
               <MenuIndex selectedIndex={1} />
               <div className='column w-[686px]'>
                  <div className='space-y-10'>
                     <CommunityItem title={'VIIK'} link={PATH.info_detail} />
                     <CommunityItem title={'VIIK'} link={PATH.info_detail} />
                  </div>
               </div>
            </div>
         </div>
      </SecondaryTemplate>
   );
};

export default Info;

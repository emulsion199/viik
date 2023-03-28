import React from 'react';
import RootTemplate from '#components/Template/RootTemplate';
import { Tab } from '@headlessui/react';
import { cc } from '#utils/string';
import Image from 'next/image';
import Footer from '#components/organisms/Footer';
import Viik from './Viik';
import Bespoke from './Bespoke';
import { useMobile } from '#hooks/useMobile';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import { motion } from 'framer-motion';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
const index = () => {
   const mobile = useMobile();

   return (
      <RootTemplate>
         {mobile ? (
            <MobileNavbar />
         ) : (
            <motion.div className={'z-always w-full sticky top-0 bg-[rgba(250,241,229,0.6)] backdrop-blur-sm'} layoutId='navbar'>
               <DesktopNavbar />
            </motion.div>
         )}
         <Tab.Group>
            <Tab.List className='h-12 w-full border-b border-b-gray-3 row md:text-p3 text-p2 font-medium'>
               <Tab className={'w-1/2 aria-selected:bg-primary aria-selected:text-white outline-none'}>VIIK</Tab>
               <Tab className={'w-1/2 aria-selected:bg-primary aria-selected:text-white outline-none'}>BESPOKE</Tab>
            </Tab.List>
            <Tab.Panels>
               <Tab.Panel className={'column center py-[110px] md:py-[220px] bg-bg-default'}>
                  <Viik />
               </Tab.Panel>
               <Tab.Panel className={'column center py-[110px] md:py-[220px] bg-bg-default'}>
                  <Bespoke />
               </Tab.Panel>
            </Tab.Panels>
         </Tab.Group>
         <Footer />
      </RootTemplate>
   );
};

export default index;

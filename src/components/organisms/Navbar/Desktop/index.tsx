import ICON_MainLogo from '#assets/logo/default.svg';
import ICON_DesktopLogo from '#assets/logo/desktopLogo.svg';
import { PATH } from '#constants/path';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useCallback, useState } from 'react';
import useBgStore from 'src/store/useTextColor';
import Shop from './DesktopMenuItem.tsx/Shop';
import DesktopMenuModal from './DesktopMenuModal';
import { useRouteHook } from './hook/useRouteHook';

interface ItemProps {
   title?: string;
   type?: number;
}
const Item = (props: ItemProps) => {
   const { title } = props;
   const { imageId } = useBgStore();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const type = useRouteHook();

   const hoverHandle = React.useCallback(() => {
      if (title === 'SHOP' && type === 0) setIsOpen(true);
   }, []);
   return (
      <span onMouseOver={hoverHandle} onMouseOut={() => setIsOpen(false)} className='relative '>
         <AnimatePresence>
            {isOpen && (
               <DesktopMenuModal>
                  <Shop />
               </DesktopMenuModal>
            )}
         </AnimatePresence>
         <button
            style={{ color: imageId !== 3 ? 'white' : '#101011', transition: `${type === 0 ? 'all ease 1s' : ''}` }}
            className=' text-base hover:'
         >
            {title}
         </button>
      </span>
   );
};

const DesktopNavbar = () => {
   const [selectLogo, setSelectLogo] = useState(true); //hover 시 메인 로고로 변경
   const { imageId } = useBgStore();
   const type = useRouteHook();
   return (
      <div className=' w-full flex flex-col px-10 justify-between'>
         <div className='flex flex-row justify-between items-center'>
            <Item title='SHOP' />
            <span
               className='w-32 h-20 flex items-center justify-center'
               onMouseOver={() => {
                  setSelectLogo(false);
               }}
               onMouseOut={() => setSelectLogo(true)}
            >
               <Link href={PATH.main}>
                  <button className=''>
                     {
                        <Image
                           className={`${type === 0 ? 'transition ease-in duration-500' : ''}  ${imageId === 3 ? 'invert' : ''}`}
                           alt='Desktop Logo'
                           src={selectLogo ? ICON_DesktopLogo : ICON_MainLogo}
                           width={selectLogo ? 128 : 80}
                           height={selectLogo ? 42 : 70}
                        />
                     }
                  </button>
               </Link>
            </span>
            <div className='space-x-12'>
               <Link href={PATH.magazine}>
                  <Item title='MAGAZINE' />
               </Link>
               <Link href={PATH.aboutus}>
                  <Item title='ABOUT US' />
               </Link>
            </div>
            <div className='space-x-12'>
               <Link href={PATH.styling}>
                  <Item title='STYLING' />
               </Link>

               <Item title='MY VIIK' />
            </div>
         </div>
         {/* {type === 5 && (
            <span className='w-full absolute bottom-[-150px]'>
               <Item title='GO VIIKSTORY.COM' />
            </span>
         )} */}
      </div>
   );
};

export default DesktopNavbar;

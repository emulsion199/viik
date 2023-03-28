import ICON_MainLogo from '#assets/logo/default.svg';
import ICON_DesktopLogo from '#assets/logo/desktopLogo.svg';
import Shop from '#components/organisms/Menu/Desktop/DesktopMenuItem.tsx/Shop';
import DesktopMenuModal from '#components/organisms/Menu/Desktop/DesktopMenuModal';
import Image from 'next/image';
import React from 'react';
import { useCallback, useState } from 'react';
import useBgStore from 'src/store/useTextColor';

interface ItemProps {
   title?: string;
}
const Item = (props: ItemProps) => {
   const { title } = props;
   const { imageId } = useBgStore();
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const hoverHandle = React.useCallback(() => {
      if (title === 'SHOP') setIsOpen(true);
   }, []);
   return (
      <span onMouseOver={hoverHandle} onMouseOut={() => setIsOpen(false)} className='relative'>
         {isOpen && (
            <div className='absolute top-[-50px] left-[-24px] z-50'>
               <DesktopMenuModal>
                  <Shop />
               </DesktopMenuModal>
            </div>
         )}
         <button style={{ color: imageId !== 3 ? 'white' : '#101011', transition: 'all ease 1s' }} className=' text-base hover:'>
            {title}
         </button>
      </span>
   );
};

const DesktopNavbar = () => {
   const [selectLogo, setSelectLogo] = useState(true); //hover 시 메인 로고로 변경
   const { imageId } = useBgStore();
   return (
      <div className='relative w-full flex flex-col px-10 justify-between'>
         <div className='flex flex-row justify-between items-center'>
            <Item title='SHOP' />
            <span
               className='w-32 h-20 flex items-center justify-center'
               onMouseOver={() => setSelectLogo(false)}
               onMouseOut={() => setSelectLogo(true)}
            >
               <button className=''>
                  {
                     <Image
                        className={`transition ease-out duration-1000  ${imageId === 3 ? 'invert' : ''}`}
                        alt='Desktop Logo'
                        src={selectLogo ? ICON_DesktopLogo : ICON_MainLogo}
                        width={selectLogo ? 128 : 80}
                        height={selectLogo ? 42 : 70}
                     />
                  }
               </button>
            </span>
            <div className='space-x-12'>
               <Item title='MAGAZINE' />
               <Item title='ABOUT US' />
            </div>
            <div className='space-x-12'>
               <Item title='STYLING' />
               <Item title='MY VIIK' />
            </div>
         </div>
         <span className='w-full absolute bottom-[-100px]'>
            <Item title='GO VIIKSTORY.COM' />
         </span>
      </div>
   );
};

export default DesktopNavbar;

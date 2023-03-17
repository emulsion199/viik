import React, { ReactNode, useState } from 'react';
import ICON_DesktopLogo from '#assets/logo/desktopLogo.svg';
import ICON_MainLogo from '#assets/logo/default.svg';
import Image from 'next/image';
import useTextColorStore from 'src/store/useTextColor';
import DesktopMenuModal from '#components/organisms/Menu/Desktop/DesktopMenuModal';
import Shop from '#components/organisms/Menu/Desktop/DesktopMenuItem.tsx/Shop';

interface ItemProps {
   title?: string;
   isBgDark?: boolean;
}
const Item = (props: ItemProps) => {
   const isBgDark = props.isBgDark;
   const [isOpen, setIsOpen] = useState<boolean>(false);
   return (
      <span onMouseOver={() => setIsOpen(true)} onMouseOut={() => setIsOpen(false)} className='relative'>
         {isOpen && (
            <div className='absolute top-[-50px] left-[-24px] z-50'>
               <DesktopMenuModal>
                  <Shop />
               </DesktopMenuModal>
            </div>
         )}
         <button style={isBgDark ? { color: 'white' } : { color: '#101011' }} className='text-base font-medium hover:'>
            {props.title}
         </button>
      </span>
   );
};

const DesktopNavbar = () => {
   const { isBgDark, setIsBgDark } = useTextColorStore();
   const [selectLogo, setSelectLogo] = useState(true); //hover 시 메인 로고로 변경
   return (
      <div className='w-screen flex flex-col px-10 h-[251px] justify-between'>
         <div className='flex flex-row justify-between items-center'>
            <Item title='SHOP' isBgDark={isBgDark} />
            <span
               className='w-32 h-20 flex items-center justify-center'
               onMouseOver={() => setSelectLogo(false)}
               onMouseOut={() => setSelectLogo(true)}
            >
               <button className=''>
                  {
                     <Image
                        alt='Desktop Logo'
                        src={selectLogo ? ICON_DesktopLogo : ICON_MainLogo}
                        width={selectLogo ? 128 : 80}
                        height={selectLogo ? 42 : 70}
                     />
                  }
               </button>
            </span>
            <div className='space-x-12'>
               <Item title='MAGAZINE' isBgDark={isBgDark} />
               <Item title='ABOUT US' isBgDark={isBgDark} />
            </div>
            <div className='space-x-12'>
               <Item title='STYLING' isBgDark={isBgDark} />
               <Item title='MY VIIK' isBgDark={isBgDark} />
            </div>
         </div>
         <span className='w-full'>
            <Item title='GO VIIKSTORY.COM' isBgDark={isBgDark} />
         </span>
      </div>
   );
};

export default DesktopNavbar;

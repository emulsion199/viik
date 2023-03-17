import Image from 'next/image';
import React, { ReactNode } from 'react';
import ICON_LOGO from '#assets/logo/default.svg';

export type FooterItemProps = {
   title: string;
   href: string;
};

export interface FooterProps {
   items: FooterItemProps[];
   text: string;
}

const MobileFooter = (props: FooterProps) => {
   return (
      <div className='w-full flex px-9 py-12 space-y-9 bg-black text-white flex-col items-start'>
         <Image src={ICON_LOGO} width={34} height={30} alt='logo' />
         {props.items.map(item => {
            return (
               <button className='text-[14px]' onClick={() => console.log('press')}>
                  {item.title}
               </button>
            );
         })}
         <span>{props.text}</span>
      </div>
   );
};

export default MobileFooter;

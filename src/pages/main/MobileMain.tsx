import MobileFooter, { FooterProps } from '#components/organisms/Footer/Mobile';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import RootTemplate from '#components/Template/RootTemplate';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';

interface Props {
   imageSrc: string;
   FooterItems: FooterProps;
}

const MobileMain = (props: Props) => {
   return (
      <RootTemplate>
         <MobileNavbar />
         <div className='w-screen h-[calc(100%-64px)] relative'>
            <Image className='' alt='main' src={props.imageSrc} fill />
         </div>
         <MobileFooter {...props.FooterItems} />
      </RootTemplate>
   );
};

export default MobileMain;

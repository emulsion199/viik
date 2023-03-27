import DesktopFooter from '#components/organisms/Footer/Desktop';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';

import React from 'react';

const DesktopMain = (props: { imageId: number }) => {
   const { imageId } = props;
   return (
      <>
         <div
            style={{
               backgroundImage: 'url(' + `/img/main_pc${imageId}.png` + ')',
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               transition: 'all ease 1s',
            }}
            className={'flex items-center w-screen h-screen bg-cover bg-center'}
         >
            <DesktopNavbar />
         </div>
         <DesktopFooter />
      </>
   );
};

export default DesktopMain;

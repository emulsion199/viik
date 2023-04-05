import DesktopFooter from '#components/organisms/Footer/Desktop';
import MobileFooter from '#components/organisms/Footer/Mobile';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import RootTemplate from '#components/Template/RootTemplate';
import { PolicyText } from '#constants/policy';
import { useMobile } from '#hooks/useMobile';
import { motion } from 'framer-motion';
import React from 'react';
import useBgStore from 'src/store/useTextColor';

const Policy = () => {
   const mobile = useMobile();
   const data = PolicyText;

   const { setImageId } = useBgStore();
   React.useEffect(() => {
      setImageId(3);
   }, []);

   return (
      <RootTemplate>
         <div className='w-screen bg-white pb-[100px]'>
            {mobile ? (
               <MobileNavbar />
            ) : (
               <div className={'w-full sticky top-0 backdrop-blur-sm'}>
                  <DesktopNavbar />
               </div>
            )}
            <div className='center column w-full'>
               <span className='text-h1 font-medium my-[60px]'>개인정보처리방침</span>
               <span className='w-full max-w-[686px] px-10'>
                  <pre className='text-start whitespace-pre-line text-p2 font-medium column'>{data}</pre>
               </span>
            </div>
         </div>
         {mobile ? <MobileFooter /> : <DesktopFooter />}
      </RootTemplate>
   );
};

export default Policy;

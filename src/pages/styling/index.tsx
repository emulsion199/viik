import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import React from 'react';
import ConsultFormRegister from 'src/components/organisms/ConsultFormRegister';
import RootTemplate from 'src/components/Template/RootTemplate';
import useBgStore from 'src/store/useTextColor';
import { motion } from 'framer-motion';
import { useMobile } from '#hooks/useMobile';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
const StylingPage = () => {
   const { setImageId } = useBgStore();
   React.useEffect(() => {
      setImageId(3);
   }, []);

   const mobile = useMobile(800);
   return (
      <RootTemplate>
         <div className={'column justify-center items-center flex-1 bg-bg-default transition-all duration-1000'}>
            {mobile ? (
               <MobileNavbar />
            ) : (
               <motion.div className={'w-full sticky top-0 bg-[rgba(250,241,229,0.6)] backdrop-blur-sm'} layoutId='navbar'>
                  <DesktopNavbar />
               </motion.div>
            )}
            <p className='whitespace-pre-wrap text-center pt-[60px] pb-12'>
               {'VIIK Styling, 더욱 나에게 맞는 공간을 완성해보세요. \n라이프스타일에 맞는 스타일링을 제안드립니다.'}
            </p>
            <ConsultFormRegister className={'w-[400px] p-6'} />
         </div>
      </RootTemplate>
   );
};
export default StylingPage;

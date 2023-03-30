import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import React from 'react';
import ConsultFormRegister from 'src/components/organisms/ConsultFormRegister';
import RootTemplate from 'src/components/Template/RootTemplate';
import useBgStore from 'src/store/useTextColor';
import { motion } from 'framer-motion';
import { useMobile } from '#hooks/useMobile';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import Footer from '#components/organisms/Footer';
import useConsultStore from 'src/store/useConsultStore';
import ConsultFormSuccess from '#components/organisms/ConsultFormSuccess';
const StylingPage = () => {
   const { setImageId } = useBgStore();
   const { setLevel } = useConsultStore();
   React.useEffect(() => {
      setImageId(3);
      setLevel(1);
   }, []);

   const mobile = useMobile(800);

   const { level } = useConsultStore();
   return (
      <RootTemplate>
         <div className={'column z-50 justify-center items-center flex-1 bg-bg-default transition-all duration-1000'}>
            {mobile ? (
               <MobileNavbar />
            ) : (
               <motion.div className={'z-10 w-full sticky top-0 bg-[rgba(250,241,229,0.6)] backdrop-blur-sm'} layoutId='navbar'>
                  <DesktopNavbar />
               </motion.div>
            )}
            {level === 1 ? (
               <>
                  <p className='whitespace-pre-wrap text-center pt-[60px] pb-12'>
                     {'VIIK Styling, 더욱 나에게 맞는 공간을 완성해보세요. \n라이프스타일에 맞는 스타일링을 제안드립니다.'}
                  </p>
                  <ConsultFormRegister className={'w-[428px] px-6 pb-[214px] '} />
               </>
            ) : (
               <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: 1 } }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={'w-full min-h-[calc(100vh-80px)] flex items-center justify-center'}
               >
                  <ConsultFormSuccess />
               </motion.div>
            )}
         </div>
         <Footer />
      </RootTemplate>
   );
};
export default StylingPage;

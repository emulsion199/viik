import ConsultFormSuccess from '#components/organisms/ConsultFormSuccess';
import Footer from '#components/organisms/Footer';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import { useMobile } from '#hooks/useMobile';
import React, { useEffect } from 'react';
import ConsultFormRegister from 'src/components/organisms/ConsultFormRegister';
import RootTemplate from 'src/components/Template/RootTemplate';
import useConsultStore from 'src/store/useConsultStore';
import useOrderStore from 'src/store/useOrderStore';
import useBgStore from 'src/store/useTextColor';
const StylingPage = () => {
   const { setImageId } = useBgStore();
   const { setLevel } = useConsultStore();
   React.useEffect(() => {
      setImageId(3);
      setLevel(1);
   }, []);

   const mobile = useMobile(800);

   const { level } = useConsultStore();
   const orderStore = useOrderStore();
   const { setInit } = orderStore;
   useEffect(() => {
      setInit(); // 렌더후 상품 선택사항 초기화
   }, [setInit]);

   return (
      <RootTemplate>
         <div className={'column z-50 justify-center items-center flex-1 bg-bg-default transition-all duration-1000'}>
            {mobile ? (
               <MobileNavbar />
            ) : (
               <div className={'z-10 w-full sticky top-0 bg-[rgba(250,241,229,0.6)] backdrop-blur-sm'}>
                  <DesktopNavbar />
               </div>
            )}
            {level === 1 ? (
               <>
                  <p className='whitespace-pre-wrap text-center pt-[60px] pb-12'>
                     {'VIIK Styling, 더욱 나에게 맞는 공간을 완성해보세요. \n라이프스타일에 맞는 스타일링을 제안드립니다.'}
                  </p>
                  <ConsultFormRegister className={'w-[428px] px-6 pb-[214px] '} />
               </>
            ) : (
               <div className={'w-full min-h-[calc(100vh-80px)] flex items-center justify-center'}>
                  <ConsultFormSuccess />
               </div>
            )}
         </div>
         <Footer />
      </RootTemplate>
   );
};
export default StylingPage;

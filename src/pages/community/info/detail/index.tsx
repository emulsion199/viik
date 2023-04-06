import RootTemplate from '#components/Template/RootTemplate';
import SecondaryTemplate from '#components/Template/SecondaryTemplate';
import CommunityItem from '#components/organisms/Community/CommunityItem';
import DesktopFooter from '#components/organisms/Footer/Desktop';
import MobileFooter from '#components/organisms/Footer/Mobile';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import { PATH } from '#constants/path';
import { useMobile } from '#hooks/useMobile';
import { useMount } from '#hooks/useMount';
import React from 'react';
import useBgStore from 'src/store/useTextColor';

const InfoDetail = () => {
   const { setImageId } = useBgStore();

   React.useEffect(() => {
      setImageId(3);
   }, []);
   const mobile = useMobile();
   const mount = useMount();

   return (
      mount && (
         <SecondaryTemplate>
            <div className='flex justify-center items-center flex-col space-y-20 py-20 w-screen'>
               <span className='text-p4 md:text-h1 font-medium'>VIIK 홈페이지 방문 공지</span>
               <span className='text-p2 font-medium w-full max-w-[600px] px-4'>
                  각자가 정의하는 ‘좋은 집’의 의미는 다양하겠지만 궁극적으로 가장 편안할 수 있는 공간, 즉 ‘내가 나일 수 있는 공간’이 좋은
                  집이 될 것입니다. 타인과 부대끼는 사회 속에서, 우리는 어쩔 수 없이 규격화된 시간과 공간 속에서 살아갑니다. 알게 모르게
                  스며드는 피곤함으로부터 안전할 수 있는 공간은 필수적입니다.
               </span>
               <span className='max-w-[680px] h-[817px] bg-bg-default border w-full'></span>
               <span className='text-p2 font-medium  w-full max-w-[600px] px-4'>
                  그렇기에 집은 오롯이 나에게 집중할 수 있는 공간이 되어야 합니다. 일말의 허물없이 나로써 취하는 휴식을 통해 더 깊이 나를
                  이해하고, 오롯이 나에게 집중할 수 있습니다. ‘집’이라는 공간은 휴식과 안정을 제공하는 삶의 보금자리입니다. 이 공간에서
                  장시간 몸을 기대는 가구는 당연히 편안해야 합니다. 시각적으로도, 신체적으로도, 정신적으로도 편안함을 느낄 수 있어야 합니다.
                  누군가 만들어둔 편안함의 기준에 스스로를 맞추지 마세요. 시간이 지날수록 깊어지는 편안함은 더욱 ‘나다운 나’를 이뤄내
                  줍니다.
               </span>
               <span className='max-w-[680px] h-[817px] bg-bg-default border w-full'></span>
               <span className='text-p2 font-medium w-full max-w-[600px] px-4'>
                  이 공간에서 장시간 몸을 기대는 가구는 당연히 편안해야 합니다. 시각적으로도, 신체적으로도, 정신적으로도 편안함을 느낄 수
                  있어야 합니다. 누군가 만들어둔 편안함의 기준에 스스로를 맞추지 마세요. 시간이 지날수록 깊어지는 편안함은 더욱 ‘나다운
                  나’를 이뤄내 줍니다.
               </span>
               <span className='text-p4 md:text-h1 font-medium'>관련 게시물</span>
               <div className='column space-y-10 max-w-[576px] w-full px-4'>
                  <CommunityItem title='VIIK' link={PATH.info_detail} />
                  <CommunityItem title='VIIK' link={PATH.info_detail} />
               </div>
            </div>
         </SecondaryTemplate>
      )
   );
};

export default InfoDetail;

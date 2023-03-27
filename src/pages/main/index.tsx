import RootTemplate from '#components/Template/RootTemplate';
import useInterval from '#utils/useInterval';
import { useEffect, useState } from 'react';
import { useMobile } from 'src/hooks/useMobile';
import useTextColorStore from 'src/store/useTextColor';
import DesktopMain from './DesktopMain';
import MobileMain from './MobileMain';

const Main = () => {
   const mobile = useMobile();

   const [BannerImageId, setBannerImageId] = useState<number>(1); // 배너 이미지 변경 state
   const { setIsBgDark } = useTextColorStore(); // 데스크탑 배너 이미지의 색상이 어두운 지 밝은 지에 따라 텍스트 색상 변경
   useInterval(
      () =>
         setBannerImageId(currentId => {
            let nextId = currentId + 1;
            if (nextId > 3) {
               nextId = 1;
            }
            return nextId;
         }),
      5000
   );
   useEffect(() => {
      if (BannerImageId === 3) {
         setIsBgDark(false);
      } else {
         setIsBgDark(true);
      }
   }, [BannerImageId]);

   return <RootTemplate>{mobile ? <MobileMain imageId={BannerImageId} /> : <DesktopMain imageId={BannerImageId} />}</RootTemplate>;
};

export default Main;

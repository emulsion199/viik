import RootTemplate from '#components/Template/RootTemplate';
import { useMobile } from '#hooks/useMobile';

import { useMount } from '#hooks/useMount';
import useInterval from '#utils/useInterval';
import React from 'react';
import useBgStore from 'src/store/useTextColor';
import DesktopMagazine from './DesktopMagazine';
import MobileMagazine from './MobileMagazine';

const MagazinePage = () => {
   React.useEffect(() => {
      setImageId(1);
   }, []);
   const store = useBgStore();
   const { imageId, setImageId } = store;

   const mount = useMount();

   const isMobile = useMobile();
   return mount && <RootTemplate>{isMobile ? <MobileMagazine /> : <DesktopMagazine />}</RootTemplate>;
};
export default MagazinePage;

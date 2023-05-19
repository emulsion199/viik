import RootTemplate from '#components/Template/RootTemplate';
import { useMount } from '#hooks/useMount';
import useInterval from '#utils/useInterval';
import React from 'react';
import { useMobile } from 'src/hooks/useMobile';
import useBgStore from 'src/store/useTextColor';
import DesktopMain from './DesktopMain';
import MobileMain from './MobileMain';

const Main = () => {
   React.useEffect(() => {
      setImageId(3);
   }, []);
   const mobile = useMobile(800);
   const store = useBgStore();
   const { imageId, setImageId } = store;

   const mount = useMount();
   return mount && <RootTemplate>{mobile ? <MobileMain /> : <DesktopMain />}</RootTemplate>;
};

export default Main;

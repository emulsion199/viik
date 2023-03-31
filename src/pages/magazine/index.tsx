import RootTemplate from '#components/Template/RootTemplate';

import { useMount } from '#hooks/useMount';
import useInterval from '#utils/useInterval';
import React from 'react';
import useBgStore from 'src/store/useTextColor';
import DesktopMagazine from './DesktopMagazine';

const MagazinePage = () => {
   React.useEffect(() => {
      setImageId(1);
   }, []);
   const store = useBgStore();
   const { imageId, setImageId } = store;
   useInterval(() => setImageId((imageId % 3) + 1), 5000);
   const mount = useMount();
   return (
      mount && (
         <RootTemplate>
            <DesktopMagazine />
         </RootTemplate>
      )
   );
};
export default MagazinePage;


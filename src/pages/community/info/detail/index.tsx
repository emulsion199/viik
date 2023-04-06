import RootTemplate from '#components/Template/RootTemplate';
import SecondaryTemplate from '#components/Template/SecondaryTemplate';
import DesktopFooter from '#components/organisms/Footer/Desktop';
import MobileFooter from '#components/organisms/Footer/Mobile';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
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
            <div className='center column w-screen'></div>
         </SecondaryTemplate>
      )
   );
};

export default InfoDetail;

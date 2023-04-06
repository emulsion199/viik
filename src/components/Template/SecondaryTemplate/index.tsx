import DesktopFooter from '#components/organisms/Footer/Desktop';
import MobileFooter from '#components/organisms/Footer/Mobile';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import { useMobile } from '#hooks/useMobile';
import { useMount } from '#hooks/useMount';
import React, { ReactNode } from 'react';
import useBgStore from 'src/store/useTextColor';
import RootTemplate from '../RootTemplate';

interface Props {
   children?: ReactNode;
}

const SecondaryTemplate = (props: Props) => {
   const { setImageId } = useBgStore();

   React.useEffect(() => {
      setImageId(3);
   }, []);
   const mobile = useMobile();
   const mount = useMount();

   return (
      <RootTemplate>
         <div className='flex w-screen bg-bg-default pb-[100px] flex-col min-h-screen'>
            {mobile ? (
               <MobileNavbar />
            ) : (
               <div className={'w-full sticky top-0 backdrop-blur-sm'}>
                  <DesktopNavbar />
               </div>
            )}
            {props.children}
         </div>
         {mobile ? <MobileFooter /> : <DesktopFooter />}
      </RootTemplate>
   );
};

export default SecondaryTemplate;

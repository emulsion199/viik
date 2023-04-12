import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import DesktopShopDetailItem from '#components/organisms/ShopDetailItem/Desktop';
import { useEffect } from 'react';
import useBgStore from 'src/store/useTextColor';

const DesktopShopDetail = () => {
   const { setImageId } = useBgStore();
   useEffect(() => {
      setImageId(3);
   }, []);
   return (
      <div className={'column'}>
         <div className={'z-10 w-full sticky top-0 bg-white '}>
            <DesktopNavbar />
         </div>

         <DesktopShopDetailItem />
      </div>
   );
};
export default DesktopShopDetail;

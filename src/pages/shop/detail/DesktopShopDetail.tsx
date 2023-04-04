import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import DesktopShopDetailItem from '#components/organisms/ShopDetailItem/Desktop';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import useBgStore from 'src/store/useTextColor';

const DesktopShopDetail = () => {
   const { setImageId } = useBgStore();
   useEffect(() => {
      setImageId(3);
   }, []);
   return (
      <div className={'column'}>
         <motion.div className={'z-10 w-full sticky top-0 bg-white '} layoutId='navbar'>
            <DesktopNavbar />
         </motion.div>

         <DesktopShopDetailItem />
      </div>
   );
};
export default DesktopShopDetail;

import { useMobile } from '#hooks/useMobile';
import DesktopShopList from './Desktop';
import MobileShopList from './Mobile';

const ShopList = () => {
   const isMobile = useMobile();
   return isMobile ? <MobileShopList /> : <DesktopShopList />;
};
export default ShopList;

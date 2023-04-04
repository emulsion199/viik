import RootTemplate from '#components/Template/RootTemplate';
import { useMobile } from '#hooks/useMobile';
import DesktopShopDetail from './DesktopShopDetail';
import MobileShopDetail from './MobileShopDetail';

const ShopDetailPage = () => {
   const isMobile = useMobile(1000);

   return <RootTemplate>{isMobile ? <MobileShopDetail /> : <DesktopShopDetail />}</RootTemplate>;
};
export default ShopDetailPage;

import RootTemplate from '#components/Template/RootTemplate';
import { useMobile } from '#hooks/useMobile';
import DesktopShop from './DesktopShop';
import MobileShop from './MobileShop';

const ShopPage = () => {
   const isMobile = useMobile();

   return <RootTemplate>{isMobile ? <MobileShop /> : <DesktopShop />}</RootTemplate>;
};
export default ShopPage;

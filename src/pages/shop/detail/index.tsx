import RootTemplate from '#components/Template/RootTemplate';
import { useMobile } from '#hooks/useMobile';
import { useMount } from '#hooks/useMount';
import DesktopShopDetail from './DesktopShopDetail';
import MobileShopDetail from './MobileShopDetail';

const ShopDetailPage = () => {
   const isMobile = useMobile(1000);
   const mount = useMount();

   return <RootTemplate>{mount && (isMobile ? <MobileShopDetail /> : <DesktopShopDetail />)}</RootTemplate>;
};
export default ShopDetailPage;

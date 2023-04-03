import { useMobile } from '#hooks/useMobile';
import DesktopMagazineList from './Desktop/DesktopMagazineList';
import MobileMagazineList from './Mobile/MobileMagazineList';

const MagazineList = () => {
   const isMobile = useMobile();
   return isMobile ? <MobileMagazineList /> : <DesktopMagazineList />;
};

export default MagazineList;

import RootTemplate from '#components/Template/RootTemplate';
import { useMobile } from '#hooks/useMobile';
import DesktopAboutus from './DesktopAboutus';
import MobileAboutus from './MobileAboutus';

const AboutusPage = () => {
   const isMobile = useMobile();

   return <RootTemplate>{isMobile ? <MobileAboutus /> : <DesktopAboutus />}</RootTemplate>;
};

export default AboutusPage;

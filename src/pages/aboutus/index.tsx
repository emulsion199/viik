import Aboutus from '#components/organisms/Aboutus';
import Footer from '#components/organisms/Footer';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import RootTemplate from '#components/Template/RootTemplate';
import { useMobile } from '#hooks/useMobile';
import { useScrollPosition } from '#utils/scroll';
import { cc } from '#utils/string';
import React from 'react';
import useBgStore from 'src/store/useTextColor';
const AboutusPage = () => {
   const { setImageId, imageId } = useBgStore();
   React.useEffect(() => {
      setImageId(3);
   }, []);
   const [flag, setFlag] = React.useState(false);

   const HandleScroll = React.useCallback(() => {
      const scrollY = window.scrollY;
      if (scrollY >= window.innerHeight / 2 - 40) {
         if (imageId !== 3) {
            setImageId(3);
         }
         if (flag === false) {
            setFlag(true);
         }
      } else {
         if (flag === true) setFlag(false);
      }
   }, []);
   React.useEffect(() => {
      window.addEventListener('scroll', HandleScroll);
      return () => window.removeEventListener('scroll', HandleScroll);
   }, []);
   const mobile = useMobile();

   return (
      <RootTemplate>
         <div className='relative h-screen '>
            <div
               style={{
                  backgroundImage: 'url(' + `/img/main_pc${imageId}.png` + ')',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-image ease-in 0.5s',
               }}
               className={'flex items-center z-0 sticky top-0 w-screen h-[calc(50vh+60px)] '}
            ></div>
            <div className={'z-10 translate-y-[-100px]  '}>
               {mobile ? (
                  <MobileNavbar />
               ) : (
                  <div className={cc('w-full sticky top-[100px] transition-all z-always', flag ? 'bg-bg-default ' : '')}>
                     <DesktopNavbar />
                  </div>
               )}
               <Aboutus />
            </div>
            <div className={'translate-y-[-100px]'}>
               <Footer />
            </div>
         </div>
      </RootTemplate>
   );
};

export default AboutusPage;

import Aboutus from '#components/organisms/Aboutus';
import Footer from '#components/organisms/Footer';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import { cc } from '#utils/string';
import React from 'react';
import useBgStore from 'src/store/useTextColor';
const DesktopAboutus = () => {
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
         {
            setFlag(true);
         }
      } else {
         setFlag(false);
      }
   }, []);
   React.useEffect(() => {
      window.addEventListener('scroll', HandleScroll);
      return () => window.removeEventListener('scroll', HandleScroll);
   }, []);
   const context = React.useMemo(() => {
      return <Aboutus />;
   }, []);
   return (
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
            <div className={cc('w-full sticky top-[100px] transition-all z-always', flag ? 'bg-bg-default ' : '')}>
               <DesktopNavbar />
            </div>

            {context}
         </div>
         <div className={'translate-y-[-100px]'}>
            <Footer />
         </div>
      </div>
   );
};
export default DesktopAboutus;

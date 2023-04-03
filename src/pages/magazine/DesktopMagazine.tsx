import Footer from '#components/organisms/Footer';
import MagazineList from '#components/organisms/MagazineList';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import { useScrollPosition } from '#utils/scroll';
import { cc } from '#utils/string';
import { motion } from 'framer-motion';
import React from 'react';
import useBgStore from 'src/store/useTextColor';

const DesktopMagazine = () => {
   const { imageId, setImageId } = useBgStore();
   const scrollY = useScrollPosition();
   const [flag, setFlag] = React.useState(false);
   React.useEffect(() => {
      if (scrollY >= window.innerHeight / 2 - 40) {
         if (imageId !== 3) {
            setImageId(3);
         }
         setFlag(true);
      } else {
         setFlag(false);
      }
   }, [imageId, scrollY]);

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
            <div className={cc('w-full sticky top-[100px] transition-all', flag ? 'bg-white' : '')}>
               <motion.div layoutId='navbar'>
                  <DesktopNavbar />
               </motion.div>
            </div>

            <MagazineList />
         </div>
         <div className={'translate-y-[-100px]'}>
            <Footer />
         </div>
      </div>
   );
};
export default DesktopMagazine;

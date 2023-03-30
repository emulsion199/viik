import MagazineList from '#components/organisms/MagazineList';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import { easeIn, easeOut, motion } from 'framer-motion';
import useBgStore from 'src/store/useTextColor';

const DesktopMagazine = () => {
   const { imageId } = useBgStore();
   return (
      <>
         <div
            style={{
               backgroundImage: 'url(' + `/img/main_pc${imageId}.png` + ')',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               transition: 'background-image ease-in 0.5s',
            }}
            className={'w-screen h-screen absolute flex items-center'}
         >
            <motion.div className='w-full' layoutId='navbar'>
               <DesktopNavbar />
            </motion.div>
         </div>

         <motion.div
            className={'static'}
            initial={{ y: window.innerHeight }}
            animate={{ y: window.innerHeight / 2 + 40 }}
            transition={{ duration: 0.3, ease: easeOut }}
         >
            <MagazineList />
         </motion.div>
      </>
   );
};
export default DesktopMagazine;

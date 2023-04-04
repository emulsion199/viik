import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import { motion } from 'framer-motion';
import useBgStore from 'src/store/useTextColor';

const DesktopMain = () => {
   const { imageId } = useBgStore();

   return (
      <div
         style={{
            backgroundImage: 'url(' + `/img/main_pc${imageId}.png` + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image ease-in 0.5s',
         }}
         className={'flex items-center w-screen h-screen '}
      >
         <div className={'w-full'}>
            <DesktopNavbar />
         </div>
      </div>
   );
};

export default DesktopMain;

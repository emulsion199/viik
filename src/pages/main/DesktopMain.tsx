import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import { useEffect } from 'react';
import useBgStore from 'src/store/useTextColor';

const DesktopMain = () => {
   const { imageId } = useBgStore();

   useEffect(() => {
      const image1 = new Image();
      image1.src = '/img/main_pc1.png';
      image1.onload = () => console.log('Image 1 is loaded');
      const image2 = new Image();
      image2.src = '/img/main_pc2.png';
      image2.onload = () => console.log('Image 2 is loaded');
      const image3 = new Image();
      image3.src = '/img/main_pc3.png';
      image3.onload = () => console.log('Image 3 is loaded');
   }, []);

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

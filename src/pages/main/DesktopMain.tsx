import DesktopFooter from '#components/organisms/Footer/Desktop';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';
import Image from 'next/image';

interface Props {
   imageSrc: string;
}

const DesktopMain = (props: Props) => {
   return (
      <div className='w-screen h-screen'>
         <div className='w-full h-full relative'>
            <Image alt='main' src={props.imageSrc} fill className='z-0' />
            <div className='absolute top-1/2'>
               <DesktopNavbar />
            </div>
         </div>
         <DesktopFooter />
      </div>
   );
};

export default DesktopMain;

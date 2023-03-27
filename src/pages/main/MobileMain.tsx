import MobileFooter from '#components/organisms/Footer/Mobile';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import RootTemplate from '#components/Template/RootTemplate';
import Image from 'next/image';

interface Props {
   imageId: number;
}

const MobileMain = (props: Props) => {
   return (
      <RootTemplate>
         <MobileNavbar />
         <div className='w-screen h-[calc(100%-64px)] relative'>
            <Image className='' alt='main' src={props.imageSrc} fill />
         </div>
         <MobileFooter />
      </RootTemplate>
   );
};

export default MobileMain;

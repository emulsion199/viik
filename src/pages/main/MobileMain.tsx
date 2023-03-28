import MobileNavbar from '#components/organisms/Navbar/Mobile';
import useBgStore from 'src/store/useTextColor';

const MobileMain = () => {
   const { imageId } = useBgStore();
   return (
      <>
         <MobileNavbar />
         <div
            style={{
               backgroundImage: 'url(' + `/img/main${imageId}.png` + ')',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               transition: 'all ease-out 1s',
            }}
            className={'flex items-center w-screen h-screen '}
         ></div>
      </>
   );
};

export default MobileMain;

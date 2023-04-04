import Footer from '#components/organisms/Footer';
import MagazineList from '#components/organisms/MagazineList';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import { useScrollPosition } from '#utils/scroll';
import React from 'react';
import useBgStore from 'src/store/useTextColor';

const MobileMagazine = () => {
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
      <div>
         <MobileNavbar />
         <MagazineList />

         <Footer />
      </div>
   );
};
export default MobileMagazine;

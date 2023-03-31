import Footer from '#components/organisms/Footer';
import MagazineList from '#components/organisms/MagazineList';
import useBgStore from 'src/store/useTextColor';

const DesktopMagazine = () => {
   const { imageId } = useBgStore();
   return (
      <>
         <MagazineList />
         <Footer />
      </>
   );
};
export default DesktopMagazine;

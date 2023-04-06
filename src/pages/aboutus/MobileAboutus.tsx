import Aboutus from '#components/organisms/Aboutus';
import Footer from '#components/organisms/Footer';
import MobileNavbar from '#components/organisms/Navbar/Mobile';

const MobileAboutus = () => {
   return (
      <div className='relative  '>
         <MobileNavbar />

         <Aboutus className={'top-[60px]'} />

         <Footer />
      </div>
   );
};
export default MobileAboutus;

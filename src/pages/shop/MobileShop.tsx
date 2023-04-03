import Footer from '#components/organisms/Footer';
import MobileNavbar from '#components/organisms/Navbar/Mobile';
import ShopList from '#components/organisms/ShopList';

const MobileShop = () => {
   return (
      <div>
         <MobileNavbar />
         <ShopList />

         <Footer />
      </div>
   );
};
export default MobileShop;

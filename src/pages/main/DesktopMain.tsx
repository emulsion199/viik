import DesktopFooter from '#components/organisms/Footer/Desktop';
import DesktopNavbar from '#components/organisms/Navbar/Desktop';

const DesktopMain = () => {
   return (
      <>
         <div className={"flex items-center w-full h-screen bg-cover bg-center bg-[url('/img/main_pc1.png')]"}>
            <DesktopNavbar />
         </div>
         <DesktopFooter />
      </>
   );
};

export default DesktopMain;

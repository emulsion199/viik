import React from "react";
import MobileNavbar from "src/components/organisms/Navbar/Mobile";
import RootTemplate from "src/components/Template/RootTemplate";
import mobile from "is-mobile";
import DesktopNavbar from "src/components/organisms/Navbar/Desktop";
const Main = () => {
  return (
    <RootTemplate>
      {mobile() ? <MobileNavbar /> : <DesktopNavbar />}
    </RootTemplate>
  );
};

export default Main;

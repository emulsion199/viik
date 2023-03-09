import React from "react";
import MobileNavbar from "src/components/organisms/Navbar/Mobile";
import RootTemplate from "src/components/Template/RootTemplate";
import DesktopNavbar from "src/components/organisms/Navbar/Desktop";
import { useMobile } from "src/hooks/useMobile";
const Main = () => {
  const mobile = useMobile();
  return (
    <RootTemplate>{mobile ? <MobileNavbar /> : <DesktopNavbar />}</RootTemplate>
  );
};

export default Main;

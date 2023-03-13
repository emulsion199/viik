import DesktopNavbar from "#components/organisms/Navbar/Desktop";
import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
}

const DesktopMain = (props: Props) => {
  return (
    <div className="w-screen h-screen relative">
      <Image alt="main" src={props.imageSrc} fill className="z-0" />
      <div className="absolute top-1/2">
        <DesktopNavbar />
      </div>
    </div>
  );
};

export default DesktopMain;

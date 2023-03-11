import React, { useEffect, useRef, useState } from "react";
import MobileNavbar from "src/components/organisms/Navbar/Mobile";
import RootTemplate from "src/components/Template/RootTemplate";
import DesktopNavbar from "src/components/organisms/Navbar/Desktop";
import { useMobile } from "src/hooks/useMobile";
import Image from "next/image";

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);
  
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};


const Main = () => {
  const mobile = useMobile();
  const [BannerImageId,setBannerImageId]=useState<number>(1);
  useInterval(() => setBannerImageId((currentId) => {
    let nextId = currentId+1;
    if (nextId>3){
      nextId=1
    }
    return nextId
  }),5000)
  return (
    <RootTemplate>{mobile ? 
    <>
    <MobileNavbar />
    <div className="w-screen h-[calc(100%-64px)] relative">
      <Image className="transition-all ease-linear duration-300" alt="main" src={`img/main${BannerImageId}.png`} fill/>
    </div>
    </>
     : <DesktopNavbar />}</RootTemplate>
  );
};

export default Main;

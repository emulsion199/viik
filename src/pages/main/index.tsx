import React, { useEffect, useRef, useState } from "react";
import MobileNavbar from "src/components/organisms/Navbar/Mobile";
import RootTemplate from "src/components/Template/RootTemplate";
import DesktopNavbar from "src/components/organisms/Navbar/Desktop";
import { useMobile } from "src/hooks/useMobile";
import Image from "next/image";
import MobileMain from "./MobileMain";
import useInterval from "#utils/useInterval";
import isMobile from "is-mobile";
import DesktopMain from "./DesktopMain";
import useTextColorStore from "src/store/useTextColor";

const Main = () => {
  const mobile = useMobile();
  const [BannerImageId, setBannerImageId] = useState<number>(1); // 배너 이미지 변경 state
  const { isBgDark, setIsBgDark } = useTextColorStore(); // 데스크탑 배너 이미지의 색상이 어두운 지 밝은 지에 따라 텍스트 색상 변경
  useInterval(
    () =>
      setBannerImageId((currentId) => {
        let nextId = currentId + 1;
        if (nextId > 3) {
          nextId = 1;
        }
        return nextId;
      }),
    5000
  );

  useEffect(() => {
    if (BannerImageId === 3) {
      setIsBgDark(false);
    } else {
      setIsBgDark(true);
    }
  }, [BannerImageId]);

  return mobile ? (
    <MobileMain imageSrc={`img/main${BannerImageId}.png`} />
  ) : (
    <DesktopMain imageSrc={`img/main${BannerImageId}.png`} />
  );
};

export default Main;

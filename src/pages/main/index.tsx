import React, { useEffect, useRef, useState } from 'react';
import MobileNavbar from 'src/components/organisms/Navbar/Mobile';
import RootTemplate from 'src/components/Template/RootTemplate';
import DesktopNavbar from 'src/components/organisms/Navbar/Desktop';
import { useMobile } from 'src/hooks/useMobile';
import Image from 'next/image';
import MobileMain from './MobileMain';
import useInterval from '#utils/useInterval';
import isMobile from 'is-mobile';
import DesktopMain from './DesktopMain';
import useTextColorStore from 'src/store/useTextColor';
import { FooterItemProps, FooterProps } from '#components/organisms/Footer/Mobile';

const FooterItems: FooterProps = {
   items: [
      { title: '인스타그램', href: '' },
      { title: '이용약관', href: '' },
      { title: '개인정보처리방침', href: '' },
      { title: 'FAQ', href: '' },
   ],
   text: '© 2023 Holidayseason 대표자명: 홍길동 | 사업자번호: 266-88-02585 | 통신판매신고번호: 제 1111-서울강남-1111 호 (사업자 정보 확인) | 이메일 문의: viik@holiseason.comster.com | 개인정보보호책임자: 홍길동 | 주소: 서울특별시 강남구 학동로 11길 11 | 대표번호: 1111-1111',
};

const Main = () => {
   const mobile = useMobile();
   const [BannerImageId, setBannerImageId] = useState<number>(1); // 배너 이미지 변경 state
   const { isBgDark, setIsBgDark } = useTextColorStore(); // 데스크탑 배너 이미지의 색상이 어두운 지 밝은 지에 따라 텍스트 색상 변경
   useInterval(
      () =>
         setBannerImageId(currentId => {
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
      <MobileMain imageSrc={`img/main${BannerImageId}.png`} FooterItems={FooterItems} />
   ) : (
      <DesktopMain imageSrc={`img/main${BannerImageId}.png`} />
   );
};

export default Main;

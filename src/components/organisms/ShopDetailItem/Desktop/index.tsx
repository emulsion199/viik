import { cc } from '#utils/string';
import React from 'react';
import { useTabChange } from '../useTabChange';
import DesktopCarousel from './DesktopCarousel';
import DeleveryTab from './Tab/DeliveryTab';
import SizeTab from './Tab/SizeTab';

const TabItem = [
   // '상품 정보',
   // '소개',
   '사이즈',
   '배송 및 CS 안내',
   // '상품 구매 시 주의사항',
   // '상품 사용 시 주의사항',
   // '상세 제품 고시 정보',
   // '리뷰',
];
const DesktopShopDetailItem = () => {
   //SCROLL
   const [fix, setFix] = React.useState(false);
   const sectionRef = React.useRef<HTMLDivElement>(null);
   React.useEffect(() => {
      const setTabFix = () => {
         handleScroll(window.scrollY);
         const y = sectionRef.current?.getBoundingClientRect().y ?? 0;
         if (y <= -100) setFix(true);
         else setFix(false);
      };
      window.addEventListener('scroll', setTabFix);
      return () => {
         window.removeEventListener('scroll', setTabFix);
      };
   }, []);
   const { childRef, onTabChange, tabRef, handleScroll, selectedTab } = useTabChange();

   return (
      <div className={'column justify-center items-center  bg-white w-full'} ref={tabRef}>
         <h1 className={'font-[reckless] text-[62px] pb-[40px]'}>{'Forli'}</h1>
         <div className={'row  px-[50px] flex-1 w-full gap-[37px]'}>
            <section className={'flex-1 '}>
               <DesktopCarousel />
            </section>

            <section className={'flex-1 bg-green'}>
               <span className={'aspect-[5/6] w-full'}>{'제품 선택 섹션'}</span>
            </section>
         </div>
         <div className={'relative w-full items-center column pt-[180px]'} ref={sectionRef}>
            <div ref={el => (childRef.current[0] = el)}>
               <SizeTab />
            </div>
            <div ref={el => (childRef.current[1] = el)}>
               <DeleveryTab />
            </div>

            <div className={cc('column gap-[14px] text-p2 left-[40px]', fix ? 'fixed top-[80px] left-0' : 'absolute left-0')}>
               {TabItem.map((it, idx) => (
                  <div
                     onClick={() => onTabChange(idx)}
                     className={cc('transition-all', selectedTab === idx ? 'text-black text-p3' : 'text-gray-2')}
                  >
                     {it}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
export default DesktopShopDetailItem;

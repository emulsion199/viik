import { ShopItemList } from '#constants/shop';
import { cc } from '#utils/string';
import { useRouter } from 'next/router';
import React from 'react';
import { useTabChange } from '../useTabChange';
import DesktopCarousel from './DesktopCarousel';
import Options from './Options';
const TabItem = [
   '상품 정보',
   '소재',
   '사이즈',
   '배송 및 CS 안내',
   '상품 구매 시 주의사항',
   '상품 사용 시 주의사항',
   '상세 제품 고시 정보',
   // '리뷰',
];

const DesktopShopDetailItem = () => {
   //ITEM
   const code = useRouter().query.code ?? 0;
   const itemInfo = ShopItemList.find(it => it.code === code);
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
   //TABS
   const ProductInfoTab = require(`./Tab/${code}/ProductInfoTab`).default;
   const DeliveryTab = require(`./Tab/${code}/DeliveryTab`).default;
   const FabricTab = require(`./Tab/${code}/FabricTab`).default;
   const ProductBuyInfoTab = require(`./Tab/${code}/ProductBuyInfoTab`).default;
   const ProductDetailInfoTab = require(`./Tab/${code}/ProductDetailInfoTab`).default;
   const SizeTab = require(`./Tab/${code}/SizeTab`).default;
   const ProductUseInfoTab = require(`./Tab/${code}/ProductUseInfoTab`).default;

   return (
      <div className={'column justify-center items-center  bg-white w-full'} ref={tabRef}>
         <h1 className={'font-[reckless] text-[62px] pb-[40px]'}>{itemInfo?.alias}</h1>
         <div className={'row  px-[50px] flex-1 w-full gap-[37px]'}>
            <section className={'flex-1 '}>
               <DesktopCarousel imglink={itemInfo?.imglink ?? []} />
            </section>

            <section className={'flex-1 '}>{itemInfo && <Options item={itemInfo} />}</section>
         </div>
         <div className={'relative w-full items-center text-start column py-[180px] gap-[100px]'} ref={sectionRef}>
            <div ref={el => (childRef.current[0] = el)}>{<ProductInfoTab />}</div>
            <div ref={el => (childRef.current[1] = el)}>
               <FabricTab />
            </div>
            <div ref={el => (childRef.current[2] = el)}>
               <SizeTab />
            </div>
            <div ref={el => (childRef.current[3] = el)}>
               <DeliveryTab />
            </div>
            <div ref={el => (childRef.current[4] = el)}>
               <ProductBuyInfoTab />
            </div>
            <div ref={el => (childRef.current[5] = el)}>
               <ProductUseInfoTab />
            </div>
            <div ref={el => (childRef.current[6] = el)}>
               <ProductDetailInfoTab />
            </div>

            <div className={cc('column gap-[14px] text-p3 left-[40px]', fix ? 'fixed top-[80px] left-0' : 'absolute left-0')}>
               {TabItem.map((it, idx) => (
                  <div
                     key={idx}
                     onClick={() => onTabChange(idx)}
                     className={cc('transition-all', selectedTab === idx ? 'text-black scale-[110%]' : 'text-gray-2')}
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

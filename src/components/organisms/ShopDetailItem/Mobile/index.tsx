import { ShopItemList } from '#constants/shop';
import { useMount } from '#hooks/useMount';
import { cc } from '#utils/string';
import { Tab } from '@headlessui/react';
import { useRouter } from 'next/router';
import React from 'react';
import DesktopCarousel from '../Desktop/DesktopCarousel';
import Options from '../Desktop/Options';
import { useTabChange } from '../useTabChange';

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

const stylesTab = cc('focus: outline-none row flex-1 items-center justify-center');
const stylesTabBorder = cc(
   'w-full text-center text-p3 after-empty relative after:absolute after:inset-x-0 after:top-[calc(100%+8px)] after:h-[2px]',
   'hui-selected:after:!block hui-selected:after:bg-primary'
);

const MobileShopDetailItem = () => {
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

   const [selectedIndex, setSelectedIndex] = React.useState(0);
   const { childRef, onTabChange, tabRef, handleScroll, selectedTab } = useTabChange();
   const ProductInfoTab = require(`../Desktop/Tab/${code}/ProductInfoTab`).default;
   const DeliveryTab = require(`../Desktop/Tab/${code}/DeliveryTab`).default;
   const FabricTab = require(`../Desktop/Tab/${code}/FabricTab`).default;
   const ProductBuyInfoTab = require(`../Desktop/Tab/${code}/ProductBuyInfoTab`).default;
   const ProductDetailInfoTab = require(`../Desktop/Tab/${code}/ProductDetailInfoTab`).default;
   const SizeTab = require(`../Desktop/Tab/${code}/SizeTab`).default;
   const ProductUseInfoTab = require(`../Desktop/Tab/${code}/ProductUseInfoTab`).default;
   const mount = useMount();
   return (
      <div className={'column justify-center items-center  bg-white w-full'} ref={tabRef}>
         <h1 className={'font-[reckless] text-[62px] pb-[40px]'}>{'Forli'}</h1>
         <div className={'flex-1 w-full '}>
            <section className={'flex-1 '}>
               <DesktopCarousel imglink={itemInfo?.imglink ?? []} />
            </section>

            <section className={'flex-1 mb-14'}>{itemInfo && <Options item={itemInfo} />}</section>
         </div>

         <Tab.Group
            selectedIndex={selectedTab}
            onChange={it => {
               onTabChange(it, 110);
            }}
         >
            <Tab.List className='h-12 row w-full border-b  border-b-gray-3 row text-p3 font-medium bg-white z-20 sticky top-[64px]'>
               <Tab className={stylesTab}>
                  <span className={stylesTabBorder}>{'상세 정보'}</span>
               </Tab>
               <Tab className={stylesTab}>
                  {' '}
                  <span className={stylesTabBorder}>{'배송 및 CS안내'}</span>
               </Tab>
               <Tab className={stylesTab}>
                  {' '}
                  <span className={stylesTabBorder}>{'리뷰'}</span>
               </Tab>
            </Tab.List>

            <Tab.Panels>
               <Tab.Panel className={'column center  bg-white'}></Tab.Panel>
               <Tab.Panel className={'column center  bg-white'}></Tab.Panel>
               <Tab.Panel className={'column center  bg-white'}></Tab.Panel>
            </Tab.Panels>
         </Tab.Group>

         <div className={'relative w-full items-center justify-center text-start column py-[180px] gap-[100px]'} ref={sectionRef}>
            <div ref={el => (childRef.current[0] = el)} className={'px-[25px]'}>
               <ProductInfoTab />
            </div>
            <div className={'px-[25px]'}>
               <FabricTab />
            </div>
            <div className={'px-[25px]'}>
               <SizeTab />
            </div>
            <div ref={el => (childRef.current[1] = el)} className={'px-[25px]'}>
               <DeliveryTab />
            </div>
            <div className={'px-[25px]'}>
               <ProductBuyInfoTab />
            </div>
            <div className={'px-[25px]'}>
               <ProductUseInfoTab />
            </div>
            <div ref={el => (childRef.current[2] = el)} className={'px-[25px] flex items-start'}>
               <ProductDetailInfoTab />
            </div>
         </div>
      </div>
   );
};
export default MobileShopDetailItem;

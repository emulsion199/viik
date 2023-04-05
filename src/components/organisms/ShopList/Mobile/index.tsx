import { ShopItemList } from '#constants/shop';
import { Tab } from '@headlessui/react';
import React from 'react';
import MobileShopPanel from './MobileShopPanel';

const MobileShopList = () => {
   const allItems = ShopItemList;

   const [selectedIndex, setSelectedIndex] = React.useState(0);
   return (
      <div className={'bg-white column justify-center items-center pb-[180px] flex-1'}>
         <Tab.Group
            selectedIndex={selectedIndex}
            onChange={it => {
               setSelectedIndex(it);
               window.scrollTo({ top: 0 });
            }}
         >
            <Tab.List className='h-12 row w-full border-b  border-b-gray-3 row text-p3 font-medium bg-white sticky top-[64px]'>
               <Tab className={'border-r border-gray-3 flex-1 aria-selected:bg-primary aria-selected:text-white outline-none'}>
                  {'VIEW ALL'}
               </Tab>
               <Tab className={'border-r border-gray-3 flex-1 aria-selected:bg-primary aria-selected:text-white outline-none'}>
                  {'SOFA'}
               </Tab>
               <Tab className={'flex-1 aria-selected:bg-primary aria-selected:text-white outline-none'}>{'TABLE'}</Tab>
            </Tab.List>
            <span className={'font-[reckless] text-[24px] pt-[47px] pb-[40px]'}>{'Shop'}</span>

            <Tab.Panels>
               <Tab.Panel className={'column center  bg-white'}>
                  <MobileShopPanel items={allItems} />
               </Tab.Panel>
               <Tab.Panel className={'column center  bg-white'}>
                  <MobileShopPanel items={allItems.filter(it => it.type === 'SOFA')} />
               </Tab.Panel>
               <Tab.Panel className={'column center  bg-white'}>
                  <MobileShopPanel items={allItems.filter(it => it.type === 'TABLE')} />
               </Tab.Panel>
            </Tab.Panels>
         </Tab.Group>
      </div>
   );
};
export default MobileShopList;

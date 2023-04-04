import { ShopItem } from '#constants/shop';
import { useMobile } from '#hooks/useMobile';
import React from 'react';
import ReactPaginate from 'react-paginate';
import DesktopShopItem from '../Desktop/DesktopShopItem';
import MobileShopItem from './MobileShopItem';

interface Props {
   items: ShopItem[];
}

const Items = (props: Props) => {
   const { items } = props;
   return (
      <div className={'column gap-[59px]'}>
         {items.map((it, idx) => (
            <MobileShopItem key={idx} {...it} />
         ))}
      </div>
   );
};
const MobileShopPanel = (props: Props) => {
   const { items } = props;

   return (
      <div className={'column'}>
         <Items items={items} />
      </div>
   );
};
export default MobileShopPanel;

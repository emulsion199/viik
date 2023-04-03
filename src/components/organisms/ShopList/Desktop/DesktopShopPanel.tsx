import { ShopItem } from '#constants/shop';
import { useMobile } from '#hooks/useMobile';
import React from 'react';
import ReactPaginate from 'react-paginate';
import DesktopShopItem from '../Desktop/DesktopShopItem';

interface Props {
   items: ShopItem[];
}

const Items = (props: Props) => {
   const { items } = props;
   return (
      <div className={'column gap-[140px]'}>
         {items.map((it, idx) => (
            <DesktopShopItem key={idx} {...it} />
         ))}
      </div>
   );
};
function DesktopShopPanel(props: Props) {
   const { items } = props;

   const [itemOffset, setItemOffset] = React.useState(0);
   const itemsPerPage = 1;
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = items.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(items.length / itemsPerPage);

   //scroll
   const scrollRef = React.useRef<HTMLDivElement>(null);
   // Invoke when user click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
      window.scrollTo({ top: 450 });
   };

   return (
      <div className={'column gap-[140px]'}>
         <Items items={currentItems} />
         <ReactPaginate
            className={'pb-[214px] text-sm row items-center justify-center gap-[23px]'}
            pageClassName={'inline'}
            activeClassName={'underline'}
            breakLabel='...'
            nextLabel=''
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel=''
            onPageChange={handlePageClick}
         />
      </div>
   );
}
export default DesktopShopPanel;

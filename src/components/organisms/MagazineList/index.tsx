import { MagazineItemList, Magazine } from '#constants/magazine';
import { easeOut, motion } from 'framer-motion';
import React from 'react';
import ReactPaginate from 'react-paginate';
import MagazineItem from './MagazineItem';

interface ItemProps {
   items: Magazine[];
}
const Items = (props: ItemProps) => {
   const { items } = props;
   return (
      <div className={'column gap-[140px]'}>
         {items.map((it, idx) => (
            <MagazineItem key={idx} {...it} />
         ))}
      </div>
   );
};
const MagazineList = () => {
   const [itemOffset, setItemOffset] = React.useState(0);
   const itemsPerPage = 2;
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = MagazineItemList.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(MagazineItemList.length / itemsPerPage);

   //scroll
   const scrollRef = React.useRef<HTMLDivElement>(null);
   // Invoke when user click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % MagazineItemList.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
   };
   return (
      <motion.div
         ref={scrollRef}
         className={'bg-white top-[10px] w-full text-center'}
         // initial={{ y: window.innerHeight }}
         // animate={{ y: window.innerHeight / 2 + 40 }}
         // transition={{ duration: 0.3, ease: easeOut }}
      >
         <h1 className={'pt-[180px] text-[62px] pb-11'}>{'Magazine'}</h1>

         <Items items={currentItems} />
         <ReactPaginate
            className={'pt-[180px] pb-[214px] text-sm row items-center justify-center gap-[23px]'}
            pageClassName={'inline'}
            activeClassName={'underline'}
            breakLabel='...'
            nextLabel=''
            pageRangeDisplayed={1}
            pageCount={2}
            previousLabel=''
            onPageChange={handlePageClick}
         />
      </motion.div>
   );
};

export default MagazineList;

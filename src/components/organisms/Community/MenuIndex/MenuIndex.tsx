import { PATH } from '#constants/path';
import { cc } from '#utils/string';
import Link from 'next/link';
import React from 'react';

interface Props {
   selectedIndex: 0 | 1 | 2;
}

const MenuIndex = (props: Props) => {
   const selectedIndex = props.selectedIndex;
   return (
      <div className='flex flex-col space-y-5 items-start w-16'>
         <Link
            className={cc('outline-none text-p3  font-medium', selectedIndex === 0 ? 'text-black' : 'text-gray-2')}
            href={PATH.promotion}
         >
            프로모션
         </Link>
         <Link className={cc('outline-none text-p3  font-medium', selectedIndex === 1 ? 'text-black' : 'text-gray-2')} href={PATH.info}>
            공지
         </Link>
         <Link className={cc('outline-none text-p3 font-medium', selectedIndex === 2 ? 'text-black' : 'text-gray-2 ')} href={PATH.review}>
            리뷰
         </Link>
      </div>
   );
};

export default MenuIndex;

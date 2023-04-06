import { PATH } from '#constants/path';
import { cc } from '#utils/string';
import Link from 'next/link';
import React from 'react';

interface Props {
   selectedIndex: 0 | 1 | 2;
}

const MobileMenuIndex = (props: Props) => {
   const selectedIndex = props.selectedIndex;
   return (
      <div className='w-full bg-bg-default border-b border-gray-3 flex flex-row h-12 sticky top-16'>
         <Link
            className={cc(
               'outline-none text-p3  font-medium w-1/3 center border-r border-gray-3',
               selectedIndex === 0 ? 'text-white bg-primary' : 'text-black bg-bg-default'
            )}
            href={PATH.promotion}
         >
            프로모션
         </Link>
         <Link
            className={cc(
               'outline-none text-p3  font-medium w-1/3 center border-r border-gray-3',
               selectedIndex === 1 ? 'text-white bg-primary' : 'text-black bg-bg-default'
            )}
            href={PATH.info}
         >
            공지
         </Link>
         <Link
            className={cc(
               'outline-none text-p3 font-medium w-1/3 center',
               selectedIndex === 2 ? 'text-white bg-primary' : 'text-black bg-bg-default'
            )}
            href={PATH.review}
         >
            리뷰
         </Link>
      </div>
   );
};

export default MobileMenuIndex;

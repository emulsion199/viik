import Link from 'next/link';
import React from 'react';

export interface CommunityItemProps {
   image?: string;
   title: string;
   link: string;
}

const CommunityItem = (props: CommunityItemProps) => {
   const { image, title, link } = props;
   return (
      <div className='w-full max-w-[576px] bg-white flex flex-col items-center justify-center rounded-lg p-3 space-y-4'>
         <span className='w-full h-[200px] md:h-[300px] bg-black rounded-lg'></span>
         <span className='text-p4 font-medium'>{props.title}</span>
         <Link className='text-p2 underline' href={link}>
            자세히 보기
         </Link>
      </div>
   );
};

export default CommunityItem;

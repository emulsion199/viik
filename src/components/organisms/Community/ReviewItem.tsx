import React from 'react';
import BestReview from './BestReview';
import ICON_STAR from '#assets/icons/star/star.svg';
import Image from 'next/image';

export interface ReviewItemProps {
   id: number;
   imageSrc?: string;
   isBest: boolean;
   category: string;
   star: number;
   name: string;
   text?: string;
}

const ReviewItem = (props: ReviewItemProps) => {
   const { id, isBest, category, star, name, text } = props;
   const stars = [];
   for (let i = 0; i < star; i++) {
      stars.push(<Image src={ICON_STAR} width={14} height={14} alt='star'></Image>);
   }
   return (
      <span className='w-[292px] flex flex-col bg-white rounded-lg p-4 justify-center space-y-4'>
         {isBest && <BestReview />}
         <span className='bg-bg-default w-full h-[307px] rounded-xl'></span>
         <span className='text-p3 font-medium'>{category}</span>
         <span className='flex flex-row space-x-3'>
            <span className='flex flex-row space-x-1'>{stars.map(star => star)}</span>
            <span className='text-p1 font-medium'>{name}</span>
         </span>
         <span>
            <p className='text-p1 text-gray-1 font-medium line-clamp-5'>{text}</p>
            <button className=' text-p1 font-medium text-black'>더보기</button>
         </span>
      </span>
   );
};

export default ReviewItem;

import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import ICON_SEARCH from '#assets/icons/line/search.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileMenuItemProps {
   title: string;
   href: string;
}

const MobileMenuItem = (props: MobileMenuItemProps) => {
   return (
      <Link className='w-full h-16 bg-bg-default border-b border-black' href={props.href}>
         <span className='flex w-full h-full items-center justify-center'>{props.title}</span>
      </Link>
   );
};

const MobileSearchBar = () => {
   return (
      <div className='relative'>
         <input
            className='w-full h-16 border-b border-black bg-bg-default text-center text-'
            placeholder='무엇을 찾고 계신가요?'
            type={'text'}
         ></input>
         <span className='absolute left-4 top-1/3'>
            <Image src={ICON_SEARCH} alt={'search'} width={24} height={24} />
         </span>
      </div>
   );
};

const MobileMenu = () => {
   const MenuItems: MobileMenuItemProps[] = [
      {
         title: 'ABOUT US',
         href: '',
      },
      {
         title: 'MAGAZINE',
         href: '',
      },
      {
         title: 'GO VIIKSTORY.COM',
         href: '',
      },
      {
         title: 'SHOP',
         href: '',
      },
   ];

   return (
      <motion.div
         initial={{ y: '-100%' }}
         animate={{ y: 0, transition: { duration: 0.5 } }}
         exit={{ y: '-100%', transition: { duration: 0.5 } }}
         className='w-full column bg-white'
      >
         <MobileSearchBar />
         {MenuItems.map((item, index) => {
            return <MobileMenuItem title={item.title} href={item.href} key={index} />;
         })}
      </motion.div>
   );
};

export default MobileMenu;

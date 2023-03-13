import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

interface MobileMenuItemProps {
  title: string;
  href: string;
}

const MobileMenuItem = (props: MobileMenuItemProps) => {
  return (
    <div className=' w-full h-16 bg-bg-default border-b border-black active:opacity-80'>
      <Link href={props.href}>
        <span className='flex w-full h-full items-center justify-center'>{props.title}</span>
      </Link>
    </div>
  );
};

const MobileSearchBar = () => {
  return (
    <div className='relative'>
      <input
        className='bg-bg-default w-full h-16 border-b border-black bg-yellow text-center'
        placeholder='무엇을 찾고 계신가요?'
        type={'text'}
      ></input>
      <span className='absolute left-4 top-1/3'>
        <BiSearch size={20} />
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
    <div className='w-full flex flex-col bg-white'>
      <MobileSearchBar />
      {MenuItems.map((item, index) => {
        return <MobileMenuItem title={item.title} href={item.href} key={index} />;
      })}
    </div>
  );
};

export default MobileMenu;

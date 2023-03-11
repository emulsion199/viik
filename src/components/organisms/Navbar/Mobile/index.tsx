import Image from 'next/image';
import React, { useState } from 'react';
import {BsList} from 'react-icons/bs'
import {HiXMark} from 'react-icons/hi2'
import MobileMenu from '../../Menu/Mobile/MobileMenu';

const MobileNavbar = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)

    const openHandler = () => {
        setIsOpen((previous) => !previous)
    }
    return (
        <>
        <div className='w-full flex sticky top-0'>
        <div className='w-full h-16 flex flex-row bg-black text-white text-p2 justify-between items-center px-4 relative'>
            <div className='flex h-full justify-center items-center' onClick={openHandler}>
                { isOpen ? <HiXMark size={18}/> :<BsList size={18} style={{padding:0,margin:0}}/>}
            </div>
            <div className='flex justify-center items-center h-full absolute left-[calc(50%-16px)]'>
            <Image alt='mainLogo' src='/logo/logo.png' width={30} height={26} />
            </div>
            <div className='flex items-center justify-center h-full w-[49px] text-white text-p2'>STYLING</div>
        </div>
        </div>
        {isOpen ? <MobileMenu /> : null}
        </>
    );
};

export default MobileNavbar;
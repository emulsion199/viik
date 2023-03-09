import React from 'react';
import {BsList} from 'react-icons/bs'
const MobileNavbar = () => {
    return (
        <div className='w-full h-16 flex flex-row bg-midnight_black text-white text-p2 justify-between items-center px-6'>
            <div className='flex h-full justify-center items-center'>
                <BsList size={16} style={{padding:0,margin:0}}/>
            </div>
            <span>asdsad</span>
            <span>asdsad</span>
        </div>
    );
};

export default MobileNavbar;
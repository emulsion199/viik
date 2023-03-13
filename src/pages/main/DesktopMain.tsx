import Image from 'next/image';
import React from 'react';

interface Props {
  imageSrc: string;
}

const DesktopMain = (props: Props) => {
  return (
    <div className='w-screen h-screen relative'>
      <Image alt='main' src={props.imageSrc} fill />
    </div>
  );
};

export default DesktopMain;

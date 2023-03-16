import React, { ReactNode } from 'react';

interface DesktopMenuModalProps {
   children?: ReactNode;
}
const DesktopMenuModal = (props: DesktopMenuModalProps) => {
   return <span className='w-[450px] h-[280px] bg-primary'>{props.children}</span>;
};

export default DesktopMenuModal;

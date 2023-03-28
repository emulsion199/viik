import React, { ReactNode } from 'react';

interface DesktopMenuModalProps {
   children?: ReactNode;
}
const DesktopMenuModal = (props: DesktopMenuModalProps) => {
   return <span className='w-[450px] bg-primary px-[24px] py-[24px]'>{props.children}</span>;
};

export default DesktopMenuModal;

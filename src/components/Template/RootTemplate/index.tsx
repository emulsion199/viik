import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface RootTemplateProps {
   children?: ReactNode;
}

const RootTemplate = (props: RootTemplateProps) => {
   return <div className='w-full h-[100px] bg-bg-default '>{props.children}</div>;
};

export default RootTemplate;

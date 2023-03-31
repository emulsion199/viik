import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface RootTemplateProps {
   children?: ReactNode;
}

const RootTemplate = (props: RootTemplateProps) => {
   return (
      <motion.div layout transition={{ ease: 'easeInOut', duration: 0.1 }} className='w-full h-[100px] bg-bg-default '>
         {props.children}
      </motion.div>
   );
};

export default RootTemplate;

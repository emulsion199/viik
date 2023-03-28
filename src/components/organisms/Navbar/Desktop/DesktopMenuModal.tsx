import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface DesktopMenuModalProps {
   children?: ReactNode;
}
const DesktopMenuModal = (props: DesktopMenuModalProps) => {
   return (
      <motion.div
         className='absolute top-[-24px] left-[-24px] z-50'
         initial={{ opacity: 0, scale: 0.98 }}
         exit={{ opacity: 0, scale: 0.98, transition: { duration: 0 } }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
            type: 'spring',
            stiffness: 300,
            duration: 10,
            damping: 20,
         }}
      >
         <span className='w-[450px] bg-primary px-[24px] py-[24px]'>{props.children}</span>
      </motion.div>
   );
};

export default DesktopMenuModal;

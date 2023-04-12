import Bespoke from '#pages/aboutus/Bespoke';
import Viik from '#pages/aboutus/Viik';
import { cc } from '#utils/string';
import { Tab } from '@headlessui/react';

const Aboutus = (props: { className?: string }) => {
   const { className } = props;
   return (
      <Tab.Group>
         <Tab.List
            className={cc(
               'sticky top-[180px] z-always bg-bg-default h-12 w-full border-b border-b-gray-3 row md:text-p3 text-p2 font-medium',
               className
            )}
         >
            <Tab className={'w-full aria-selected:bg-primary aria-selected:text-white outline-none'}>VIIK</Tab>
            {/* <Tab className={'w-1/2 aria-selected:bg-primary aria-selected:text-white outline-none'}>BESPOKE</Tab> */}
         </Tab.List>
         <Tab.Panels>
            <Tab.Panel className={'column center py-[80px] md:py-[160px] bg-bg-default'}>
               <Viik />
            </Tab.Panel>
            {/* <Tab.Panel className={'column center py-[80px] md:py-[160px] bg-bg-default'}>
               <Bespoke />
            </Tab.Panel> */}
         </Tab.Panels>
      </Tab.Group>
   );
};
export default Aboutus;

import React from 'react';
import RootTemplate from '#components/Template/RootTemplate';
import { Tab } from '@headlessui/react';
import { cc } from '#utils/string';
const index = () => {
   return (
      <RootTemplate>
         <Tab.Group>
            <Tab.List className='h-12 w-full border-b border-b-gray-3 row '>
               <Tab className={'w-1/2 aria-selected:bg-primary aria-selected:text-white outline-none'}>VIIK</Tab>
               <Tab className={'w-1/2 aria-selected:bg-primary aria-selected:text-white outline-none'}>BESPOKE</Tab>
            </Tab.List>
            <Tab.Panels>
               <Tab.Panel className={'flex justify-center items-center py-[220px]'}>
                  <div className='column'>
                     <span>asds</span>
                     <span>ascacascs</span>
                  </div>
               </Tab.Panel>
               <Tab.Panel>content2</Tab.Panel>
            </Tab.Panels>
         </Tab.Group>
      </RootTemplate>
   );
};

export default index;

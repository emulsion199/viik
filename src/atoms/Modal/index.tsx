import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface Props {
   open: boolean;
   toggle: () => void;
   title: string;
   children?: React.ReactNode;
}
function Modal(props: Props) {
   const { open, toggle, title, children } = props;
   return (
      <Transition appear show={open} as={Fragment}>
         <Dialog as='div' className='relative z-always' onClose={toggle}>
            <Transition.Child
               as={Fragment}
               enter='ease-out duration-300'
               enterFrom='opacity-0'
               enterTo='opacity-100'
               leave='ease-in duration-200'
               leaveFrom='opacity-100'
               leaveTo='opacity-0'
            >
               <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
               <div className='flex min-h-full items-center justify-center  text-center'>
                  <Transition.Child
                     as={Fragment}
                     enter='ease-out duration-300'
                     enterFrom='opacity-0 scale-95'
                     enterTo='opacity-100 scale-100'
                     leave='ease-in duration-200'
                     leaveFrom='opacity-100 scale-100'
                     leaveTo='opacity-0 scale-95'
                  >
                     <Dialog.Panel className='w-[calc(100%-50px)]  transform overflow-hidden rounded-[10px] bg-white px-4 py-6 text-left align-middle shadow-xl transition-all'>
                        <Dialog.Title className='font-bold'>{title}</Dialog.Title>
                        <>{children}</>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
}
export default Modal;

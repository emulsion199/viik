import { cc } from '#utils/string';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ICON_CANCEL from '#assets/icons/line/cancel.svg';
import Image from 'next/image';

interface Props {
   open: boolean;
   toggle: () => void;
   title: string;
   children?: React.ReactNode;
   className?: string;
   toggleButton?: boolean;
}
function Modal(props: Props) {
   const { open, toggle, title, children, className, toggleButton = false } = props;
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
                     <Dialog.Panel
                        className={cc(
                           'w-[calc(100%-50px)] max-w-[400px] transform overflow-hidden rounded-[10px] bg-white px-4 py-4 text-left align-middle shadow-xl transition-all',
                           className
                        )}
                     >
                        {toggleButton && (
                           <button className={'flex justify-end w-full'} onClick={toggle}>
                              <Image className={'invert-[20%]'} src={ICON_CANCEL} alt={'cancel'} width={36} height={36} />
                           </button>
                        )}
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

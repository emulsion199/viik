import ICON_LOGO from '#assets/logo/default.svg';
import { FooterItems } from '#constants/footer';
import Image from 'next/image';

const MobileFooter = () => {
   const footerItems = FooterItems;
   const { items, text } = footerItems;
   return (
      <div className='w-full flex px-8 py-12 space-y-9 bg-black text-white flex-col items-start'>
         <Image src={ICON_LOGO} width={34} height={30} alt='logo' />
         {items.map(item => {
            return (
               <button key={item.title} className='text-[14px]' onClick={() => console.log('press')}>
                  {item.title}
               </button>
            );
         })}
         <span className='text-[11px]'>{text}</span>
      </div>
   );
};

export default MobileFooter;

import ICON_LOGO from '#assets/logo/desktopLogo.svg';
import { FooterItems } from '#constants/footer';
import Image from 'next/image';

const DesktopFooter = () => {
   const footerItems = FooterItems;
   const { items, text } = footerItems;
   return (
      <div className='w-full flex px-32 py-20 space-x-[308px] bg-black text-white items-start'>
         <span className='text-[11px] flex'>{text}</span>
         <span className='column'>
            {items.map(item => {
               return (
                  <button key={item.title} className='text-[14px] text-start w-28' onClick={() => console.log('press')}>
                     {item.title}
                  </button>
               );
            })}
         </span>
         <Image src={ICON_LOGO} width={80} height={26} alt='logo' />
      </div>
   );
};

export default DesktopFooter;

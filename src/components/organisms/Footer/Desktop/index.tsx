import ICON_LOGO from '#assets/logo/desktopLogo.svg';
import { FooterItems } from '#constants/footer';
import Image from 'next/image';

const DesktopFooter = () => {
   const footerItems = FooterItems;
   const { items, text } = footerItems;
   return (
      <div className={'row px-32 py-20 bg-black text-white items-start justify-between space-x-10'}>
         <span className='whitespace-pre-wrap text-[11px] max-w-[300px]'>{text}</span>
         <span className='flex flex-col'>
            {items.map(item => {
               return (
                  <button key={item.title} className='text-p2 text-start' onClick={() => console.log('press')}>
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

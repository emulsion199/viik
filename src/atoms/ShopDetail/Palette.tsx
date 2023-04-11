import { Option, ShopItem } from '#constants/shop';
import { cc } from '#utils/string';
import React from 'react';

interface Props {
   className?: string;
   option: Option;
   onChange: (item: { title: string; option: string; price: number }, duplicate: boolean) => void;
   value: { title: string; option: string }[];
}
const Palette = (props: Props) => {
   const { className, option, onChange, value } = props;
   return (
      <div className={cc('column', className)}>
         <span className={'text-p2  pb-3 '}>{option.title}</span>
         <div className={'row gap-1'}>
            {option.item.map((it, idx) => (
               <button
                  key={idx}
                  type={'button'}
                  onClick={() => {
                     onChange({ title: option.title, option: it.name, price: it.price }, option.duplicate);
                  }}
                  className={cc(
                     'w-9 h-9 flex items-center justify-center transition-all outline-none',
                     value.find(val => val.option === it.name && val.title === option.title)
                        ? ' outline-black outline outline-offset-0 outline-1'
                        : ''
                  )}
               >
                  <div key={idx} style={{ backgroundColor: it.color }} className={cc(`w-5 h-5 border border-gray-3`)} />
               </button>
            ))}
         </div>
         {option.desc && <span>{option.desc}</span>}
      </div>
   );
};
export default Palette;

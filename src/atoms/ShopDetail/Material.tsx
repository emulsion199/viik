import { Option, ShopItem } from '#constants/shop';
import { cc } from '#utils/string';
import React from 'react';

interface Props {
   className?: string;
   option: Option;
   onChange: (item: { title: string; option: string }) => void;
}
const Material = (props: Props) => {
   const { className, option, onChange } = props;
   const [material, setMaterial] = React.useState(99);
   return (
      <div className={cc('column', className)}>
         <span className={'text-p2  pb-3 '}>{option.title}</span>
         <div className={'row gap-1'}>
            {option.item.map((it, idx) => (
               <div className={'text-center'}>
                  <button
                     className={cc(
                        'w-[91px] h-[96px] block outline-none transition-all',
                        material === idx ? ' outline-black outline outline-offset-0 outline-1' : ''
                     )}
                     onClick={() => {
                        onChange({ title: option.title, option: it.name });
                        setMaterial(idx);
                     }}
                  >
                     <div key={idx} style={{ backgroundImage: it.imgsrc }} className={`w-[75px] h-[80px] border border-gray-3 m-2`} />
                  </button>
                  <span className={'text-p2'}>{it.name}</span>
               </div>
            ))}
         </div>
         {option.desc && <span>{option.desc}</span>}
      </div>
   );
};
export default Material;
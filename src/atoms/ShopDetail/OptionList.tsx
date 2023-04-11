import { Option } from '#constants/shop';
import { cc } from '#utils/string';
import React from 'react';

interface Props {
   className?: string;
   option: Option;
   onChange: (item: { title: string; option: string }) => void;
}

const OptionList = (props: Props) => {
   const { className, option, onChange } = props;
   const [selectedIdx, setSelectedIdx] = React.useState(99);
   return (
      <div className={cc('column ', className)}>
         <span className={'text-p3 py-[17px]'}>{option.title}</span>
         <div className={'row gap-1'}>
            {option.item.map((it, idx) => (
               <button
                  onClick={() => {
                     onChange({ title: option.title, option: it.name });
                     setSelectedIdx(idx);
                  }}
                  key={idx}
                  className={cc(
                     'text-p2 flex items-center text-center justify-center border border-black w-fit px-[10px] py-1 transition-all',
                     selectedIdx != idx ? 'border-gray-2 text-gray-2' : ''
                  )}
               >
                  {it.name}
               </button>
            ))}
         </div>
         {option.desc && <span>{option.desc}</span>}
      </div>
   );
};
export default OptionList;

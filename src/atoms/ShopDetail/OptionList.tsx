import { Option } from '#constants/shop';
import { cc } from '#utils/string';
import React from 'react';

interface Props {
   className?: string;
   option: Option;
   onChange: (item: { title: string; option: string }, duplicate: boolean) => void;
   value: { title: string; option: string }[];
}

const OptionList = (props: Props) => {
   const { className, option, onChange, value } = props;
   const [selectedIdx, setSelectedIdx] = React.useState(99);
   return (
      <div className={cc('column ', className)}>
         <span className={'text-p3 pb-[17px]'}>{option.title}</span>
         <div className={'row gap-1'}>
            {option.item.map((it, idx) => (
               <button
                  type={'button'}
                  onClick={() => {
                     onChange({ title: option.title, option: it.name }, option.duplicate);
                     setSelectedIdx(idx);
                  }}
                  key={idx}
                  className={cc(
                     'text-p2 flex items-center text-center justify-center border border-black w-fit px-[10px] py-1 transition-all',
                     !value.find(val => val.option === it.name && val.title === option.title) ? 'border-gray-2 text-gray-2' : ''
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

import { cc } from '#utils/string';

interface Props {
   className?: string;
   options: string[];
   title?: string;
   desc?: string;
}

const OptionList = (props: Props) => {
   const { className, title, options, desc } = props;
   return (
      <div className={cc('column ', className)}>
         <span className={'text-p3 py-[17px]'}>{title}</span>
         <div className={'row gap-1'}>
            {options.map((it, idx) => (
               <button
                  key={idx}
                  className={'text-p2 flex items-center text-center justify-center border border-black w-fit px-[10px] py-1'}
               >
                  {it}
               </button>
            ))}
         </div>
         <span>{desc}</span>
         <hr className={'mt-[20px]'} />
      </div>
   );
};
export default OptionList;

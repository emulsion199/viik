interface Props {
   className?: string;
   title: string;
   colors: string[];
   desc?: string;
}
const Palette = (props: Props) => {
   const { className, title, colors, desc } = props;
   return (
      <div className={'column'}>
         <span className={'text-p2  pb-3 '}>{title}</span>
         <div className={'row gap-1'}>
            {colors.map((it, idx) => (
               <div key={idx} style={{ backgroundColor: it }} className={`w-5 h-5 border border-gray-3 m-2`} />
            ))}
         </div>
         <span>{desc}</span>
      </div>
   );
};
export default Palette;

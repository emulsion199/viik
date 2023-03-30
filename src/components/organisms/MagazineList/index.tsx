import { MagazineItemList } from '#constants/magazine';
import MagazineItem from './MagazineItem';

const MagazineList = () => {
   return (
      <div className={'bg-white top-[10px] w-full text-center'}>
         <h1 className={'pt-[180px] text-[62px] pb-11'}>{'Magazine'}</h1>
         <li className={'column gap-[140px] items-center'}>
            {MagazineItemList.map((it, idx) => (
               <MagazineItem key={idx} {...it} />
            ))}
         </li>
      </div>
   );
};

export default MagazineList;

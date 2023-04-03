import LOGO from '#assets/logo/desktopLogo.svg';
import { Magazine, MagazineItemList } from '#constants/magazine';
import Image from 'next/image';
import MobileMagazineItem from './MobileMagazineItem';

interface ItemProps {
   items: Magazine[];
}
const Items = (props: ItemProps) => {
   const { items } = props;
   return (
      <div className={'column gap-[59px]'}>
         {items.map((it, idx) => (
            <MobileMagazineItem key={idx} {...it} />
         ))}
      </div>
   );
};
const MobileMagazineList = () => {
   return (
      <div className={'bg-white top-[10px] w-full text-center z-10 pb-[138px] column justify-center items-center'}>
         <Image className={'invert pt-16'} src={LOGO} width={107} height={38} alt={'logo'} />
         <h2 className={'pb-11 text-p2 pt-1'}>{'MAGAZINE'}</h2>
         <Items items={MagazineItemList} />
      </div>
   );
};

export default MobileMagazineList;

import { Magazine } from '#constants/magazine';
import Link from 'next/link';
import Image from 'next/image';

const MobileMagazineItem = (props: Magazine) => {
   const { title, desc, imgsrc } = props;

   return (
      <div className={'text-center column items-center'}>
         <Image className={'pb-[19px]'} src={imgsrc} alt={'item'} width={1080} />
         <h2 className={'text-p4 text-[18px] pb-4'}>{title}</h2>
         <h3 className={'max-w-[312px] pb-6 text-p2'}>{desc}</h3>
         <Link href={'/'}>
            <span className={'underline text-sm'}>{'자세히 보기'}</span>
         </Link>
      </div>
   );
};
export default MobileMagazineItem;

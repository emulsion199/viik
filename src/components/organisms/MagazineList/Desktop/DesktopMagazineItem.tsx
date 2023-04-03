import { Magazine } from '#constants/magazine';
import Link from 'next/link';
import Image from 'next/image';

const DesktopMagazineItem = (props: Magazine) => {
   const { title, desc, imgsrc } = props;

   return (
      <div className={'text-center column items-center'}>
         <Image className={'pb-10'} src={imgsrc} alt={'item'} width={1080} />
         <h2 className={'pb-6'}>{title}</h2>
         <h3 className={'max-w-[312px] pb-6'}>{desc}</h3>
         <Link href={'/'}>
            <span className={'underline'}>{'자세히 보기'}</span>
         </Link>
      </div>
   );
};
export default DesktopMagazineItem;

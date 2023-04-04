import { PATH } from '#constants/path';
import { ShopItem } from '#constants/shop';
import Image from 'next/image';
import Link from 'next/link';
const DesktopShopItem = (props: ShopItem) => {
   const { title, desc, imgsrc, type } = props;
   return (
      <div className={'column items-center justify-center text-center'}>
         <Image className={'pb-10'} src={imgsrc} alt={'item'} />
         <h1 className={'text-h1 pb-6'}>{title}</h1>
         <h2 className={'text-p2 whitespace-pre-wrap pb-6'}>{desc}</h2>
         <Link href={PATH.shop_detail}>
            <span className={'underline'}>{'자세히 보기'}</span>
         </Link>
      </div>
   );
};
export default DesktopShopItem;

import { StaticImageData } from 'next/image';

import SHOP_1 from '../../public/shop/shop_1.png';
import SHOP_2 from '../../public/shop/shop_2.png';
import SHOP_3 from '../../public/shop/shop_3.png';

export type ShopItem = {
   title: string;
   desc: string;
   type: 'SOFA' | 'TABLE';
   imgsrc: StaticImageData;
};
export const ShopItemList: ShopItem[] = [
   {
      title: 'FORLI 소파',
      desc: '적당한 높이의 다리와 넉넉히 올라오는 좌방석의 높이, FORLI\n더욱 여유롭고 깔끔한 공간의 완성\n체격이 큰 구성원도 편안한 소파',
      imgsrc: SHOP_1,
      type: 'SOFA',
   },
   {
      title: 'COMO 소파',
      desc: '든든하게 어깨까지 받쳐줄 COMO\n나이에 관계 없이 반듯한 자세는 누구에게나 중요하니까\n낮은 좌방석으로 아이들도, 반려동물도 안전하게',
      imgsrc: SHOP_2,
      type: 'SOFA',
   },
   {
      title: 'BATON 테이블',
      desc: '원목 자체가 주는 자연스러우면서 무게감 있는 분위기',
      imgsrc: SHOP_3,
      type: 'TABLE',
   },
];

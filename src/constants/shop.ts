import { StaticImageData } from 'next/image';

import SHOP_1 from '../../public/shop/shop_1.png';
import SHOP_2 from '../../public/shop/shop_2.png';
import SHOP_3 from '../../public/shop/shop_3.png';
import { PATH } from './path';

export type ShopItem = {
   link: string;
   code: string;
   alias?: string;
   title: string;
   desc: string;
   type: 'SOFA' | 'TABLE';
   imgsrc: StaticImageData;
   imglink: string[];
   options: Option[];
};
export type Option = {
   title: string;
   item: { name: string; price: number; color?: string; imgsrc?: string }[];
   desc?: string;
   duplicate: boolean;
};
export const ShopItemList: ShopItem[] = [
   {
      link: PATH.shop_detail + '?code=0',
      code: '0',
      title: 'FORLI 소파',
      alias: 'FORLI',
      desc: '적당한 높이의 다리와 넉넉히 올라오는 좌방석의 높이, FORLI\n더욱 여유롭고 깔끔한 공간의 완성\n체격이 큰 구성원도 편안한 소파',
      imgsrc: SHOP_1,
      imglink: ["url('/shop/detail/forlisofa.jpeg')", "url('/shop/detail/forlisofa2.png')"],
      type: 'SOFA',
      options: [
         {
            title: 'KETS INFORRES',

            item: [
               { name: '크림 화이트', price: 0, color: '#C2BEB9' },
               { name: '커피 베이지', price: 0, color: '#A89D91' },
               { name: '다크 포레스트', price: 0, color: '#3F4B46' },
               { name: '라이트 그레이', price: 0, color: '#AEACA9' },
               { name: '인디 핑크', price: 0, color: '#CCADA0' },
               { name: '딥 블루', price: 0, color: '#2F3C4A' },
               { name: '소프트 아이보리', price: 0, color: '#DFE0DC' },
            ],
            duplicate: false,
         },
         {
            title: 'KETS TWEET',
            item: [
               { name: '화이트', price: 0, color: '#C9C9C8' },
               { name: '아이보리', price: 0, color: '#BFBBB7' },
               { name: '베이지', price: 0, color: '#908D8E' },
               { name: '라이트 그레이', price: 0, color: '#AFB0B3' },
               { name: '딥 블루', price: 0, color: '#272D38' },
               { name: '딥 그린', price: 0, color: '#414231' },
            ],
            duplicate: false,
         },
         {
            title: '사이즈',
            item: [
               { name: 'LEFT SIDE', price: 2210000 },
               { name: 'RIGHT SIDE', price: 2210000 },
               { name: 'MIDDLE', price: 1950000 },
               { name: 'MID-TRAY', price: 2850000 },
               { name: 'FORLI DOUBLE', price: 4300000 },
               { name: 'FORLI TRIPLE', price: 6370000 },
               { name: 'FORLI QUAD', price: 8320000 },
               { name: 'FORLI DUAL', price: 7270000 },
            ],
            duplicate: false,
         },
         {
            title: '등, 팔 쿠션 내장재',
            item: [
               { name: '마이크로 화이버', price: 0 },
               { name: '향균 파워솜', price: 0 },
            ],
            duplicate: false,
         },
         {
            title: '좌방석 내장재',
            item: [
               { name: '마이크로 화이버', price: 0 },
               { name: 'HR 골드스펀지', price: 0 },
            ],
            duplicate: false,
         },
      ],
   },

   {
      link: PATH.shop_detail + '?code=1',
      code: '1',
      title: 'COMO 소파',
      alias: 'COMO',
      desc: '든든하게 어깨까지 받쳐줄 COMO\n나이에 관계 없이 반듯한 자세는 누구에게나 중요하니까\n낮은 좌방석으로 아이들도, 반려동물도 안전하게',
      imgsrc: SHOP_2,
      imglink: ["url('/shop/detail/comosofa.png')", "url('/shop/detail/comosofa2.png')"],
      type: 'SOFA',
      options: [
         {
            title: 'KETS INFORRES',
            item: [
               { name: '크림 화이트', price: 0, color: '#C2BEB9' },
               { name: '커피 베이지', price: 0, color: '#A89D91' },
               { name: '다크 포레스트', price: 0, color: '#3F4B46' },
               { name: '라이트 그레이', price: 0, color: '#AEACA9' },
               { name: '인디 핑크', price: 0, color: '#CCADA0' },
               { name: '딥 블루', price: 0, color: '#2F3C4A' },
               { name: '소프트 아이보리', price: 0, color: '#DFE0DC' },
            ],
            duplicate: false,
         },
         {
            title: 'KETS TWEET',
            item: [
               { name: '화이트', price: 0, color: '#C9C9C8' },
               { name: '아이보리', price: 0, color: '#BFBBB7' },
               { name: '베이지', price: 0, color: '#908D8E' },
               { name: '라이트 그레이', price: 0, color: '#AFB0B3' },
               { name: '딥 블루', price: 0, color: '#272D38' },
               { name: '딥 그린', price: 0, color: '#414231' },
            ],
            duplicate: false,
         },
         {
            title: '사이즈',
            item: [
               { name: 'LEFT SIDE', price: 2145000 },
               { name: 'RIGHT SIDE', price: 2145000 },
               { name: 'MIDDLE', price: 1965000 },
               { name: 'OTTOMAN', price: 1750000 },
               { name: 'COUCH LEFT SIDE', price: 2650000 },
               { name: 'COUCH RIGHT SIDE', price: 2650000 },
               { name: 'DOUBLE', price: 4290000 },
               { name: 'TRIPLE', price: 6255000 },
               { name: 'QUAD', price: 8220000 },
               { name: 'ALPHA-TRIPLE', price: 6760000 },
               { name: 'ALPHA-QUAD', price: 8725000 },
            ],
            duplicate: false,
         },
         {
            title: '등, 팔 쿠션 내장재',
            item: [
               { name: '마이크로 화이버', price: 0 },
               { name: '향균 파워솜', price: 0 },
            ],
            duplicate: false,
         },
         {
            title: '좌방석 내장재',
            item: [
               { name: '마이크로 화이버', price: 0 },
               { name: 'HR 골드스펀지', price: 0 },
            ],
            duplicate: false,
         },
      ],
   },
   {
      link: PATH.shop_detail + '?code=2',
      code: '2',
      title: 'BATON 테이블',
      alias: 'BATON',
      desc: '원목 자체가 주는 자연스러우면서 무게감 있는 분위기',
      imgsrc: SHOP_3,
      imglink: ["url('/shop/detail/batontable.jpeg')", "url('/shop/detail/batontable2.jpeg')"],
      type: 'TABLE',
      options: [
         {
            title: '소재',
            item: [
               { name: 'Walnut', price: 0, imgsrc: "url('/shop/material/walnut.png')" },
               { name: 'White Oak', price: 0, imgsrc: "url('/shop/material/white_oak.png')" },
            ],
            duplicate: false,
         },

         {
            title: '사이즈',
            item: [
               { name: 'DINING TABLE(2000*800*800)', price: 4250000 },
               { name: 'SOFA TABLE(1200*600*340)', price: 1500000 },
            ],
            duplicate: false,
         },
      ],
   },
];

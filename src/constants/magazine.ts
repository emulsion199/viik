import { StaticImageData } from 'next/image';
import MAGAZINE_1 from '#assets/images/magazine_1.png';
import MAGAZINE_2 from '#assets/images/magazine_2.png';
import MAGAZINE_3 from '#assets/images/magazine_3.png';

export type Magazine = {
   imgsrc: StaticImageData;
   title: string;
   desc: string;
};

export const MagazineItemList: Magazine[] = [
   {
      imgsrc: MAGAZINE_1,
      title: '1% 클럽이 고른 고감도 가구',
      desc: '옆집과 다른, 우리집만의 라이프스타일에 맞도록 디자인된 당신만의 가구를 VIIK가 추천해드립니다.',
   },
   {
      imgsrc: MAGAZINE_2,
      title: '1% 클럽이 고른 고감도 가구',
      desc: '옆집과 다른, 우리집만의 라이프스타일에 맞도록 디자인된 당신만의 가구를 VIIK가 추천해드립니다.',
   },
   {
      imgsrc: MAGAZINE_3,
      title: '1% 클럽이 고른 고감도 가구',
      desc: '옆집과 다른, 우리집만의 라이프스타일에 맞도록 디자인된 당신만의 가구를 VIIK가 추천해드립니다.',
   },
];

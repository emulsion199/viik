export type FooterItemsType = { items: Record<string, string>[]; text: string };
import {PATH} from './path'
export const FooterItems: FooterItemsType = {
   items: [
      { title: '인스타그램', href: '' },
      { title: '이용약관', href: PATH.terms },
      { title: '개인정보처리방침', href: PATH.policy },
      { title: 'FAQ', href: PATH.faq},
   ],
   text: '© 2023 Holidayseason\n 대표자명: 홍길동 | 사업자번호: 266-88-02585 | 통신판매신고번호: 제 1111-서울강남-1111 호 (사업자 정보 확인) | 이메일 문의: viik@holiseason.comster.com | 개인정보보호책임자: 홍길동 | 주소: 서울특별시 강남구 학동로 11길 11 | 대표번호: 1111-1111',
};

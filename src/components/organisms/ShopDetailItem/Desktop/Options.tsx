import { useMobile } from '#hooks/useMobile';
import { cc } from '#utils/string';
import OptionList from 'src/atoms/ShopDetail/OptionList';
import Palette from 'src/atoms/ShopDetail/Palette';

const Options = () => {
   const isMobile = useMobile(1000);
   return (
      <div className={cc('column h-full justify-between')}>
         <section>
            <Palette
               className={isMobile ? 'px-3 py-2' : ''}
               title={'KETS INFORRES'}
               colors={['#C2BEB9', '#2F3C4A', '#CCADA0', '#AEACA9', '#3F4B46', '#A89D91', '#DFE0DC']}
            />
            <Palette
               className={isMobile ? 'px-3 py-2' : ''}
               title={'KETS TWEET'}
               colors={['#414231', '#272D38', '#AFB0B3', '#908D8E', '#BFBBB7', '#C9C9C8']}
            />
            <hr className={'mt-3 '} />

            <OptionList className={isMobile ? 'px-3 py-2' : ''} title={'사이즈 (중복 선택 가능)'} options={['LEFT SIDE', 'RIGHT SIDE']} />
            <hr className={'mt-[20px]'} />
            <OptionList className={isMobile ? 'px-3 py-2' : ''} title={'등, 팔쿠션 내장재'} options={['마이크로 화이버', '향균 파워솜']} />
            <hr className={'mt-[20px]'} />
            <OptionList className={isMobile ? 'px-3 py-2' : ''} title={'좌방석 내장재'} options={['마이크로 화이버', 'HR 골드스펀지']} />
         </section>
         <section className={isMobile ? 'fixed bottom-0 w-full z-always ' : ''}>
            <div className={cc(isMobile ? 'h-12 py-2 px-3 border-t border-gray-3' : '', 'row justify-between text-p3 pt-2 bg-white')}>
               <span>{'총 상품금액'}</span>
               <span>{'123123원'}</span>
            </div>
            <button className={cc('primary button', isMobile ? '' : 'mt-10 ')}>{'나만의 장바구니'}</button>
         </section>
      </div>
   );
};

export default Options;

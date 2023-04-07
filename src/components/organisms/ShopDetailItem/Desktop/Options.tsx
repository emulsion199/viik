import OptionList from 'src/atoms/ShopDetail/OptionList';
import Palette from 'src/atoms/ShopDetail/Palette';

const Options = () => {
   return (
      <div className={'column'}>
         <Palette title={'KETS INFORRES'} colors={['#C2BEB9', '#2F3C4A', '#CCADA0', '#AEACA9', '#3F4B46', '#A89D91', '#DFE0DC']} />
         <Palette title={'KETS TWEET'} colors={['#414231', '#272D38', '#AFB0B3', '#908D8E', '#BFBBB7', '#C9C9C8']} />
         <hr className={'mt-3'} />

         <OptionList title={'사이즈 (중복 선택 가능)'} options={['LEFT SIDE', 'RIGHT SIDE']} />
         <OptionList title={'등, 팔쿠션 내장재'} options={['마이크로 화이버', '향균 파워솜']} />
         <OptionList title={'좌방석 내장재'} options={['마이크로 화이버', 'HR 골드스펀지']} />

         <div className={'row justify-between text-p3 pt-2'}>
            <span>{'총 상품금액'}</span>
            <span>{'123123원'}</span>
         </div>
         <button className={'primary button mt-10'}>{'나만의 장바구니'}</button>
      </div>
   );
};

export default Options;

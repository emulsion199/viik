import { Button } from 'src/atoms/Button';

const ConsultFormSuccess = () => {
   return (
      <div className={'column justify-center items-center gap-[86px]'}>
         <h1>{'상담 신청 완료'}</h1>
         <Button className={'w-[380px] h-15'} primary>
            {'제품 보러가기'}
         </Button>
      </div>
   );
};
export default ConsultFormSuccess;

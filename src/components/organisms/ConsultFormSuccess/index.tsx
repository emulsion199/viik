import { PATH } from '#constants/path';
import { cc } from '#utils/string';
import Link from 'next/link';

interface Props {
   className?: string;
}
const ConsultFormSuccess = (props: Props) => {
   const { className } = props;
   return (
      <div className={cc(className, 'column justify-center items-center gap-[86px]')}>
         <h1>{'상담 신청 완료'}</h1>
         <Link href={PATH.shop} className={'w-full h-15 button primary flex items-center justify-center'}>
            {'제품 보러가기'}
         </Link>
      </div>
   );
};
export default ConsultFormSuccess;

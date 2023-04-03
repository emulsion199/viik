import DesktopCarousel from './DesktopCarousel';
import DeleveryTab from './Tab/DeliveryTab';

const DesktopShopDetailItem = () => {
   return (
      <div className={'column justify-center items-center  bg-white w-full'}>
         <h1 className={'font-[reckless] text-[62px] pb-[40px]'}>{'Forli'}</h1>
         <div className={'row px-[50px] flex-1 w-full gap-[37px]'}>
            <section className={'flex-1 '}>
               <DesktopCarousel />
            </section>

            <section className={'flex-1 bg-green'}>
               <span className={'aspect-[5/6] w-full'}>{'제품 선택 섹션'}</span>
            </section>
         </div>
         <div>
            <DeleveryTab />
         </div>
      </div>
   );
};
export default DesktopShopDetailItem;

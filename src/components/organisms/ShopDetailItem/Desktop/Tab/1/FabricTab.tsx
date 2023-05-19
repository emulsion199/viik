import Image from 'next/image';
import FABRIC_IMAGE from '#assets/images/shop/fabric.png';

const FabricTab = () => {
   return (
      <div>
         <Image src={FABRIC_IMAGE} alt={'fabric'} />
      </div>
   );
};
export default FabricTab;

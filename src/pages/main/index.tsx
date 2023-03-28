import RootTemplate from '#components/Template/RootTemplate';
import { useMount } from '#hooks/useMount';
import useInterval from '#utils/useInterval';
import { useMobile } from 'src/hooks/useMobile';
import useBgStore from 'src/store/useTextColor';
import DesktopMain from './DesktopMain';
import MobileMain from './MobileMain';

const Main = () => {
   const mobile = useMobile(800);
   const store = useBgStore();
   const { imageId, setImageId } = store;
   useInterval(() => setImageId((imageId % 3) + 1), 5000);

   const mount = useMount();
   return mount && <RootTemplate>{mobile ? <MobileMain /> : <DesktopMain />}</RootTemplate>;
};

export default Main;

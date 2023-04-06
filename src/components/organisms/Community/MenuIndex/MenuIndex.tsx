import { useMobile } from '#hooks/useMobile';
import React from 'react';
import MobileMenuIndex from './MobileMenuIndex';
import DesktopMenuIndex from './DesktopMenuIndex';
interface Props {
   selectedIndex: 0 | 1 | 2;
}
const MenuIndex = (props: Props) => {
   const mobile = useMobile();
   return mobile ? <MobileMenuIndex selectedIndex={props.selectedIndex} /> : <DesktopMenuIndex selectedIndex={props.selectedIndex} />;
};

export default MenuIndex;

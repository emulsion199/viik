import { useMobile } from '#hooks/useMobile';
import React from 'react';
import DesktopFooter from './Desktop';
import MobileFooter from './Mobile';

const Footer = () => {
   const mobile: boolean = useMobile();
   return mobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;

import React, { useEffect } from 'react';
import isMobile from 'is-mobile';

export const useMobile = () => {
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    if (isMobile()) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  return mobile;
};

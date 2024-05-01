'use client';

import LogoMarkMobile from './BeehiveLogoMarkMobile';
import LogoMark from './BeehiveLogoMark';
import { useEffect, useState } from 'react';

const LogoWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
  }, []);

  return <>{isMobile ? <LogoMarkMobile /> : <LogoMark />}</>;
};

export default LogoWrapper;

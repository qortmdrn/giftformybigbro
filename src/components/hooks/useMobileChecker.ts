import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function useMobileChecker() {
  const [isMobileMode, setIsMobileMode] = useState(false);

  useEffect(() => {
    setIsMobileMode(isMobile);
  }, []);

  return {
    isMobile: isMobileMode,
  };
}

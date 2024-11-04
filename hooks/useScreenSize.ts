import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

const useScreenSize = () => {
  // Safe initial state that works on server
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Only run useEffect on client side
  useEffect(() => {
    // Check if window exists (client-side only)
    if (typeof window !== 'undefined') {
      // Set initial state based on actual window width
      setIsSmallScreen(window.innerWidth <= MOBILE_BREAKPOINT);

      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= MOBILE_BREAKPOINT);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isSmallScreen;
};

export default useScreenSize;

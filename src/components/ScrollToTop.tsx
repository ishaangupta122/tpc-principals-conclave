import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Store the current scroll position before navigation
    const state = window.history.state as { scrollY?: number } | null;
    if (state?.scrollY) {
      window.scrollTo(0, state.scrollY);
    } else {
      window.scrollTo(0, 0);
    }

    // Save current scroll position before leaving the page
    const handleScroll = () => {
      const currentState = window.history.state || {};
      window.history.replaceState(
        {
          ...currentState,
          scrollY: window.scrollY,
        },
        ""
      );
    };

    // Throttle scroll event listener
    let timeout: any;
    const throttledHandleScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [location]);

  return null;
};

export default ScrollToTop;

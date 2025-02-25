// src/hooks/useSmoothScroll.js
import { useEffect, useRef } from 'react';

export function SmoothScroll() {
  const targetScrollY = useRef(window.scrollY);
  const isAnimating = useRef(false);

  const animateScroll = () => {
    const currentScrollY = window.scrollY;
    const distance = targetScrollY.current - currentScrollY;
    if (Math.abs(distance) < 1) {
      window.scrollTo(0, targetScrollY.current);
      isAnimating.current = false;
      return;
    }
    window.scrollTo(0, currentScrollY + distance * 0.1);
    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault(); // Prevent the default wheel behavior
      targetScrollY.current += e.deltaY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY.current = Math.max(0, Math.min(targetScrollY.current, maxScroll));
      if (!isAnimating.current) {
        isAnimating.current = true;
        requestAnimationFrame(animateScroll);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
}

import { useState, useEffect } from 'react';

export function useScrollPosition() {
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      function handleScroll() {
         setScrollY(window.pageYOffset);
      }

      window.addEventListener('scroll', handleScroll);

      // cleanup function
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return scrollY;
}

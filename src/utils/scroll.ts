import { useState, useEffect } from 'react';

export function useScrollPosition() {
   let scrollY = 0;

   useEffect(() => {
      function handleScroll() {
         console.log('a');
         scrollY = window.pageYOffset;
      }

      window.addEventListener('scroll', handleScroll);

      // cleanup function
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return scrollY;
}

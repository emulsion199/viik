import React from 'react';

export const useTabChange = () => {
   const tabRef = React.useRef<HTMLDivElement>(null);
   const childRef = React.useRef<HTMLDivElement[] | null[]>([]);
   const scrolling = React.useRef(false);
   const scrollTarget = React.useRef<number | null>(null);
   const [selectedTab, setSelectedTab] = React.useState(1);

   const onTabChange = React.useCallback((id: number) => {
      const childTop = (childRef?.current[id]?.getBoundingClientRect()?.top ?? 0) + window.scrollY - 80;

      setSelectedTab(id);
      if (tabRef.current?.scrollTop === childTop) return; //scroll할 필요가 없으면 return

      window.scrollTo({ top: childTop, behavior: 'smooth' });
      scrollTarget.current = childTop;
      scrolling.current = true;
   }, []);

   const handleScroll = React.useCallback((scrollTop: number) => {
      if (scrollTop) {
         if (scrolling.current) {
            if (scrollTop - (scrollTarget.current ?? 0) < 1) {
               scrollTarget.current = null;
               scrolling.current = false;
            }
            return;
         }
      }
      const tabTops: number[] = [];
      childRef.current.forEach(it => tabTops.push((it?.getBoundingClientRect()?.top ?? 0) + window.scrollY - 80));
      //최상단 일 때
      if (scrollTop < tabTops[0]) {
         return setSelectedTab(0);
      }
      //중단 일 때
      for (var i = 0; i < tabTops.length; i++) {
         if (tabTops[i] <= scrollTop && scrollTop < tabTops[i + 1]) {
            return setSelectedTab(i);
         }
      }
      //최하단 일 때
      if (scrollTop > tabTops[tabTops.length - 1]) {
         return setSelectedTab(tabTops.length - 1);
      }
   }, []);
   return { childRef, tabRef, handleScroll, onTabChange, selectedTab };
};

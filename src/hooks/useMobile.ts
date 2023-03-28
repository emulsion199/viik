import { useMediaQuery } from 'react-responsive';

/**
 *
 * @param width
 * @returns 모바일 최대크기
 */
export const useMobile = (width: number) => {
   const mobile = useMediaQuery({ query: `(max-width:${width}px)` });
   return mobile;
};

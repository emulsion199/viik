import { PATH } from '#constants/path';
import { useRouter } from 'next/router';

export const useRouteHook = () => {
   const router = useRouter();
   if (router.asPath === PATH.main) return 0;
   return 1;
};

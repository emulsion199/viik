import SecondaryTemplate from '#components/Template/SecondaryTemplate';
import { PATH } from '#constants/path';
import { useMount } from '#hooks/useMount';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useAuthStore from 'src/store/useAuthStore';

const Admin = () => {
   const authStore = useAuthStore();
   const route = useRouter();
   const [isLogin, setIsLogin] = useState<boolean>(authStore.isLogin);
   useEffect(() => {
      if (!isLogin) {
         route.replace(PATH.admin_login);
      }
   }, [isLogin]);
   const mount = useMount();

   const Logout = () => {
      authStore.setLogout();
      setIsLogin(false);
      route.replace(PATH.admin_login);
   };

   return (
      isLogin &&
      mount && (
         <SecondaryTemplate>
            <div className='flex items-center justify-center flex-col'>
               <section className=''>
                  <div className='flex flex-row space-x-5'>
                     <div className='flex flex-col'>
                        <span>column</span>
                        <span>2020-2021</span>
                        <span>2020-2021</span>
                        <span>2020-2021</span>
                     </div>
                     <div className='flex flex-col'>
                        <span>column</span>
                        <span>2020-2021</span>
                        <span>2020-2021</span>
                        <span>2020-2021</span>
                     </div>
                     <div className='flex flex-col'>
                        <span>column</span>
                        <span>2020-2021</span>
                        <span>2020-2021</span>
                        <span>2020-2021</span>
                     </div>
                  </div>
               </section>
               <button className='w-40 h-10 bg-black text-white' onClick={Logout}>
                  로그아웃
               </button>
            </div>
         </SecondaryTemplate>
      )
   );
};

export default Admin;

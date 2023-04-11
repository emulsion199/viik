import SecondaryTemplate from '#components/Template/SecondaryTemplate';
import { PATH } from '#constants/path';
import { useMount } from '#hooks/useMount';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { loginWithEmail } from 'src/firebase/firebaseClient';
import useAuthStore from 'src/store/useAuthStore';

const AdminLogin = () => {
   const mount = useMount();

   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const authStore = useAuthStore();
   const route = useRouter();
   const Login = async () => {
      const result = await loginWithEmail(email, password);
      if (result) {
         authStore.setLogin();
         route.replace(PATH.admin);
      }
   };

   return (
      mount && (
         <SecondaryTemplate>
            <section className='flex justify-center items-center flex-col space-y-5'>
               <span className='text-h1 font-medium'>로그인</span>
               <div className='flex space-y-5 flex-col'>
                  <input type='email' onChange={e => setEmail(e.target.value)}></input>
                  <input type='password' onChange={e => setPassword(e.target.value)}></input>
               </div>
               <button onClick={Login} className='bg-black text-white w-60 h-10'>
                  로그인
               </button>
            </section>
         </SecondaryTemplate>
      )
   );
};

export default AdminLogin;

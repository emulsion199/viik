import SecondaryTemplate from '#components/Template/SecondaryTemplate';
import { PATH } from '#constants/path';
import { useMount } from '#hooks/useMount';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getDatas } from 'src/firebase/firebaseClient';
import useAuthStore from 'src/store/useAuthStore';

interface CategoryType {
   주문상태: string;
   '상품 주문 번호': string;
   '주문 번호': string;
   주문일시: string;
   주문금액: string;
   상품: string;
   구매자번호: string;
}
const Category = ['주문상태', '상품 주문 번호', '주문 번호', '주문일시', '주문금액', '상품', '구매자번호'];

const Data: CategoryType[] = [
   {
      주문상태: '주문거부',
      '상품 주문 번호': '1012012020',
      '주문 번호': '291912912919',
      주문일시: '2023.04.11 12:10',
      주문금액: '110,000',
      상품: 'Forli 소파',
      구매자번호: '010-8983-4927',
   },
   {
      주문상태: '주문거부',
      '상품 주문 번호': '1012012021',
      '주문 번호': '291912912919',
      주문일시: '2023.04.11 12:10',
      주문금액: '110,000',
      상품: 'Forli 소파',
      구매자번호: '010-8983-4927',
   },
   {
      주문상태: '주문거부',
      '상품 주문 번호': '1012012022',
      '주문 번호': '291912912919',
      주문일시: '2023.04.11 12:10',
      주문금액: '110,000',
      상품: 'Forli 소파',
      구매자번호: '010-8983-4927',
   },
];

const Admin = () => {
   const authStore = useAuthStore();
   const route = useRouter();
   const [isLogin, setIsLogin] = useState<boolean>(authStore.isLogin);
   const [loadData, setLoadData] = useState<CategoryType[]>([]);

   useEffect(() => {
      if (!isLogin) {
         route.replace(PATH.admin_login);
      }
   }, [isLogin]);

   useEffect(() => {
      const LoadData = async () => {
         const d = await getDatas('order');
         console.log('d:', d);
         setLoadData(d);
      };
      void LoadData();
   }, []);
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
                     {Category.map(c => {
                        return (
                           <div key={c} className='flex flex-col'>
                              <span>{c}</span>
                              {loadData.map(data => {
                                 return <span key={data['상품 주문 번호']}>{data[c]}</span>;
                              })}
                           </div>
                        );
                     })}
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

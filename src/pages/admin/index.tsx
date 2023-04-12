import SecondaryTemplate from '#components/Template/SecondaryTemplate';
import { PATH } from '#constants/path';
import { useMount } from '#hooks/useMount';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { addData, getDatas } from 'src/firebase/firebaseClient';
import useAuthStore from 'src/store/useAuthStore';

interface PurchaseProps {
   address: string;
   address_detail: string;
   address_valid: boolean;
   item: { option: string; title: string }[];
   name: string;
   phone: string;
   privacyAccept: boolean;
}
const Category = ['address', 'address_detail', 'address_valid', 'item', 'name', 'phone', 'privacyAccept'];
const Category_Kor = ['주소', '상세 주소', '유효한 주소', '상품', '이름', '전화번호', '개인정보보호'];
const Admin = () => {
   const authStore = useAuthStore();
   const route = useRouter();
   const [isLogin, setIsLogin] = useState<boolean>(authStore.isLogin);
   const [Data, setData] = useState<PurchaseProps[]>([]);

   useEffect(() => {
      if (!isLogin) {
         route.replace(PATH.admin_login);
      }
   }, [isLogin]);

   useEffect(() => {
      const LoadData = async () => {
         const data: any = await getDatas('purchase');
         setData(data);
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
               <div className='flex flex-row space-x-40'>
                  {Category_Kor.map((c, index) => {
                     return (
                        <span key={index} className='flex flex-col'>
                           {c}
                        </span>
                     );
                  })}
               </div>
               {/* {Data.map(data => {
                  return (
                     <Fragment key={data.phone}>
                        <div>{data.address}</div>
                        <div>{data.address_detail}</div>
                        <div>{data.address_valid.toString()}</div>
                        <div>
                           {data.item.map(item => (
                              <Fragment key={item.title}>
                                 <div>{item.option}</div>
                                 <div>{item.title}</div>
                              </Fragment>
                           ))}
                        </div>
                        <div>{data.name}</div>
                        <div>{data.phone}</div>
                        <div>{data.privacyAccept.toString()}</div>
                     </Fragment>
                  );
               })} */}
               <button className='w-40 h-10 bg-black text-white' onClick={Logout}>
                  로그아웃
               </button>
            </div>
         </SecondaryTemplate>
      )
   );
};

export default Admin;

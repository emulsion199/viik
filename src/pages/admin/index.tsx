import SecondaryTemplate from '#components/Template/SecondaryTemplate';
import { PATH } from '#constants/path';
import { useMount } from '#hooks/useMount';
import { cc } from '#utils/string';
import { Timestamp } from 'firebase/firestore';
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
   title: string;
   createdAt: Timestamp;
}
const Category = ['name', 'phone', 'address', 'address_detail', 'item'];
const Category_Kor = ['일자', '이름', '전화번호', '주소', '상세 주소', '상품'];
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
         const data: any[] = (await getDatas('purchase')) ?? [];
         setData(data.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds));
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
            <table>
               <tr className={'sticky top-[80px]'}>
                  {Category_Kor.map((c, index) => (
                     <th key={index} className={'px-2 bg-primary text-white border border-bg-default'}>
                        {c}
                     </th>
                  ))}
               </tr>
               {Data.map((data, idx) => (
                  <tr className={cc('', idx % 2 ? 'bg-bg-hover' : 'bg-bg-default')}>
                     <td className={'px-2 border'}>{new Date(data.createdAt.seconds * 1000).toLocaleString()}</td>
                     <td className={'px-2 border'}>{data.name}</td>
                     <td className={'px-2 border'}>{data.phone}</td>

                     <td className={'px-2 border'}>{data.address}</td>
                     <td className={'px-2 border'}>{data.address_detail}</td>
                     <td className={'px-2 border'}>
                        {data.item.length == 0 ? (
                           <span>{'상품주문X, 스타일링신청'}</span>
                        ) : (
                           <>
                              <span className={'font-semibold'}>{data.title}</span>
                              {data.item.map(item => (
                                 <div key={item.title} className={'whitespace-pre-wrap'}>
                                    <span>{`${item.title}:${item.option}\n`}</span>
                                 </div>
                              ))}
                           </>
                        )}
                     </td>
                  </tr>
               ))}
            </table>
            {/* <button className='w-40 h-10 bg-black text-white' onClick={Logout}>
               로그아웃
            </button> */}
         </SecondaryTemplate>
      )
   );
};

export default Admin;

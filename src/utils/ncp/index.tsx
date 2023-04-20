import axios from 'axios';
import { createHmac } from 'crypto';
const getRequestParams = (to: string) => {
   return {
      plusFriendId: '@viik',
      templateCode: 'consultForm',
      messages: [
         {
            to: '01090288518',
            content: `${1234} 고객님 상담신청 완료되었습니다.
VIIK의 전문 디자이너가 고객님의 상담 도와드릴 예정입니다.
            
고객님의 취향을 반영할 수 있는 VIIK와
나만의 가구를 만나보세요.
            
현재 문의량 증대에 따라 상담 진행까지
2-3일 정도의 시간이 소요될 수 있는 점 사전 안내드립니다.`,
         },
      ],
   };
};

export const sendKakaoMessage = async (to: string) => {
   const params = getRequestParams(to);
   const date = Date.now().toString();

   const hmac = createHmac('sha256', process.env.NEXT_PUBLIC_NAVER_SECRETKEY || '');
   hmac.update('POST');
   hmac.update(' ');
   hmac.update(`/alimtalk/v2/services/${process.env.NEXT_PUBLIC_NAVER_CHANNLEL_ID}/messages`);
   hmac.update('\n');
   hmac.update(date);
   hmac.update('\n');
   hmac.update(process.env.NEXT_PUBLIC_NAVER_ACCESSKEY || '');

   const signature = hmac.digest('base64');

   const { data: result } = await axios.post(
      `https://sens.apigw.ntruss.com/alimtalk/v2/services/${process.env.NEXT_PUBLIC_NAVER_CHANNEL_ID}/messages`,
      params,
      {
         headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-ncp-apigw-timestamp': date,
            'x-ncp-iam-access-key': process.env.NEXT_PUBLIC_NAVER_ACCESSKEY,
            'x-ncp-apigw-signature-v2': signature,
         },
      }
   );
   console.log(result);
};

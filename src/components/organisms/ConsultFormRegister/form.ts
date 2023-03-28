import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useForm } from 'react-hook-form';

const Schema = z.object({
   name: z.string({ required_error: '성함을 입력해주세요.' }).min(1, { message: '성함을 입력해주세요.' }),
   phone: z
      .string({ required_error: '휴대폰 번호 11자리를 모두 입력해주세요.' })
      .min(11, { message: '휴대폰 번호 11자리를 모두 입력해주세요.' }),
   address: z.string({ required_error: '주소를 검색해주세요.' }).min(1, { message: '주소를 검색해주세요.' }),
   address_detail: z.string().optional(),
   privacyAccept: z.boolean({ required_error: '개인정보 수집/이용 동의를 체크해주세요.' }).refine(it => it === true, {
      message: '개인정보 수집/이용 동의를 체크해주세요.',
   }),
});
export type ConsultFormRegisterData = z.infer<typeof Schema>;
const useConsultFormRegister = () => {
   const form = useForm<ConsultFormRegisterData>({
      mode: 'onSubmit',
      resolver: zodResolver(Schema),
   });
   return form;
};
export default useConsultFormRegister;

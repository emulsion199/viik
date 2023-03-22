import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useForm } from 'react-hook-form';

const Schema = z.object({
  name: z.string().min(1, { message: '성함을 입력해주세요.' }),
  phone: z.string().min(11, { message: '휴대폰 번호 11자리를 모두 입력해주세요.' }),
  type: z.enum(['소파', '테이블', '기타']),
  privacyAccept: z.boolean().refine(it => it === true, {
    message: '개인정보 수집/이용 동의를 체크해주세요.',
  }),
});
export type ConsultFormRegisterData = z.infer<typeof Schema>;
const useConsultFormRegister = () => {
  const form = useForm<ConsultFormRegisterData>({
    mode: 'onChange',
    resolver: zodResolver(Schema),
    defaultValues: { type: '소파' },
  });
  return form;
};
export default useConsultFormRegister;

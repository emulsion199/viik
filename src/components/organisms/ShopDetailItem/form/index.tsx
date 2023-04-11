import { Option } from '#constants/shop';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
   options: z.array(
      z.object({
         title: z.string(),
         option: z.string(),
      })
   ),
});
export type shopOptionData = z.infer<typeof schema>;
export const useShopOptionForm = (optionLength: number) => {
   schema.refine(it => it.options.length == optionLength, { message: '모든 옵션을 선택해주세요.' });
   const form = useForm<shopOptionData>({
      mode: 'onChange',
      resolver: zodResolver(schema),
      defaultValues: { options: [] },
   });
   return form;
};

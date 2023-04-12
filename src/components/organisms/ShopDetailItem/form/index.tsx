import { Option } from '#constants/shop';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
   options: z.array(
      z.object({
         title: z.string(),
         option: z.string(),
         price: z.number(),
      })
   ),
});
export type shopOptionData = z.infer<typeof schema>;
export const useShopOptionForm = (optionLength: number) => {
   const Schema = React.useMemo(() => {
      return schema.refine(it => it.options.length >= optionLength, { message: '모든 옵션을 선택해주세요.', path: ['options'] });
   }, [optionLength, schema]);
   const form = useForm<shopOptionData>({
      mode: 'onChange',
      resolver: zodResolver(Schema),
      defaultValues: { options: [] },
   });
   return form;
};

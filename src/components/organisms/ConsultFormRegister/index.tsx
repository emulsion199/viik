import { Button } from 'src/atoms/Button';
import { Input } from 'src/atoms/Input';
import { Label } from 'src/atoms/Label';
import { RadioGroup, Switch } from '@headlessui/react';
import { cc } from '#utils/string';
import ICON_CHECK from '#assets/icons/form/check.svg';
import Image from 'next/image';
import { useMount } from '#hooks/useMount';
import useConsultFormRegister, { ConsultFormRegisterData } from './form';
import { useController } from 'react-hook-form';
import React from 'react';

//STYLE
const ToggleStyle = cc('w-5 h-5 rounded-[3.33px] border border-gray-1 ');
const ToggleSelectedStyle = cc('bg-black w-5 h-5 rounded-[3.33px]');

//TYPES
interface Props {
   className?: string;
}
const ConsultFormRegister = (props: Props) => {
   const { className } = props;
   //FORM
   const { control, formState, handleSubmit } = useConsultFormRegister();
   const name = useController({ control, name: 'name' });
   const phone = useController({ control, name: 'phone' });
   const address = useController({ control, name: 'address' });
   const addreess_detail = useController({ control, name: 'address_detail' });

   const privacyAccept = useController({ control, name: 'privacyAccept' });
   const submit = React.useCallback((data: ConsultFormRegisterData) => {
      const { name, phone, address, address_detail, privacyAccept } = data;
      console.log(data);
   }, []);
   //HYDRATION ERROR
   const mounted = useMount();
   return (
      <form className={cc('column flex-1 gap-7', className)} onSubmit={handleSubmit(submit)}>
         <Label title={'홈스타일링 받을 분 성함'}>
            <Input placeholder={'이름'} {...name.field} error={formState.errors.name && true} />
            <span className={'text-xs text-error'}>{formState.errors.name?.message}</span>
         </Label>
         <Label title={'제안서를 받을 연락처'}>
            <Input placeholder={'010-0000-0000'} {...phone.field} error={formState.errors.phone && true} />
            <span className={'text-xs text-error'}>{formState.errors.phone?.message}</span>
         </Label>
         <Label title={'주소 검색'}>
            <div className={'row gap-[10px]'}>
               <Input
                  className={'w-[266px]'}
                  placeholder={'예) 문래동 강서타워, 선유로 82'}
                  {...address.field}
                  error={formState.errors.address && true}
               />
               <Button className={'h-12 w-[104px]'} primary>
                  {'검색'}
               </Button>
            </div>
            {formState.errors.address && <span className={'text-xs text-error'}>{formState.errors.address?.message}</span>}
         </Label>
         <Label title={'상세 주소'}>
            <Input placeholder={'상세주소'} {...addreess_detail.field} error={formState.errors.address_detail && true} />
            <span className={'text-xs text-error'}>{formState.errors.address_detail?.message}</span>
         </Label>
         <div className={'row justify-between'}>
            {mounted && (
               <Switch.Group {...privacyAccept.field}>
                  <Switch className={'row gap-2 items-center relative'}>
                     {({ checked }) => (
                        <>
                           <div className={checked ? ToggleSelectedStyle : ToggleStyle}></div>
                           {checked && <Image className={'absolute'} src={ICON_CHECK} alt={'checked'} width={20} height={20}></Image>}
                           <span>{'개인정보 수집 이용 동의'}</span>
                        </>
                     )}
                  </Switch>
               </Switch.Group>
            )}

            <p className={'underline'}>{'자세히보기'}</p>
         </div>
         <p className={'text-xs -mt-7 text-error pt-1'}>{formState.errors.privacyAccept?.message}</p>

         <Button disabled={formState.isSubmitting} className={'mt-2'} type={'submit'} primary>
            {'상담 신청하기'}
         </Button>
         <Button className={'-mt-1'} border>
            {'VIIK의 가구를 더 살펴보세요'}
         </Button>
      </form>
   );
};
export default ConsultFormRegister;

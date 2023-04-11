import ICON_CHECK from '#assets/icons/form/check.svg';
import { useMount } from '#hooks/useMount';
import { cc, formatPhone } from '#utils/string';
import { Switch } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useController } from 'react-hook-form';
import { Button } from 'src/atoms/Button';
import { Input } from 'src/atoms/Input';
import { Label } from 'src/atoms/Label';
import { addData } from 'src/firebase/firebaseClient';
import useConsultStore from 'src/store/useConsultStore';
import useOrderStore from 'src/store/useOrderStore';
import useConsultFormRegister, { ConsultFormRegisterData } from './form';

//STYLE
const ToggleStyle = cc('w-5 h-5 rounded-[3.33px] border border-gray-1 ');
const ToggleSelectedStyle = cc('bg-black w-5 h-5 rounded-[3.33px]');

//TYPES
interface Props {
   className?: string;
}
const ConsultFormRegister = (props: Props) => {
   const { className } = props;
   //STORE
   const { setLevel } = useConsultStore();
   //FORM
   const { control, formState, handleSubmit, setValue } = useConsultFormRegister();
   const name = useController({ control, name: 'name' });
   const phone = useController({ control, name: 'phone' });
   const address = useController({ control, name: 'address' });
   const addreess_detail = useController({ control, name: 'address_detail' });
   const address_valid = useController({ control, name: 'address_valid' });

   const privacyAccept = useController({ control, name: 'privacyAccept' });

   const orderStore = useOrderStore();

   const submit = React.useCallback((data: ConsultFormRegisterData) => {
      const { name, phone, address, address_detail, privacyAccept } = data;
      addData({ ...data, item: Object.assign({}, orderStore.options) }, 'purchase');
      setLevel(2);
   }, []);
   //HYDRATION ERROR
   const mounted = useMount();
   //POSTCODE
   const scriptUrl = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
   const open = useDaumPostcodePopup(scriptUrl);
   const handleComplete = (data: any) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
         if (data.bname !== '') {
            extraAddress += data.bname;
         }
         if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
         }
         fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }

      setValue('address', fullAddress, { shouldValidate: true });
      setValue('address_valid', true, { shouldValidate: true });
   };
   const handleClick = async () => {
      open({ onComplete: handleComplete, defaultQuery: address.field.value });
   };
   return (
      <form className={cc('column flex-1 gap-1', className)} onSubmit={handleSubmit(submit)}>
         <Label title={'홈스타일링 받을 분 성함'}>
            <Input placeholder={'이름'} {...name.field} error={formState.errors.name && true} />
            <span className={'text-xs text-error'}>{formState.errors.name?.message}&nbsp;</span>
         </Label>
         <Label title={'제안서를 받을 연락처'}>
            <Input
               placeholder={'010-0000-0000'}
               {...phone.field}
               error={formState.errors.phone && true}
               onChange={e => {
                  phone.field.onChange(e);
                  setValue('phone', formatPhone(e.target.value));
               }}
            />
            <span className={'text-xs text-error'}>{formState.errors.phone?.message}&nbsp;</span>
         </Label>
         <Label title={'주소 검색'}>
            <div className={'row gap-[10px]'}>
               <Input
                  disabled={address_valid.field.value}
                  className={'w-[266px] '}
                  placeholder={'예) 문래동 강서타워, 선유로 82'}
                  {...address.field}
                  error={formState.errors.address && true}
               />
               <button onClick={handleClick} type={'button'} className={'h-12 w-[104px] primary button'}>
                  {'검색'}
               </button>
            </div>
            <span className={'text-xs text-error'}>{formState.errors.address?.message}&nbsp;</span>
         </Label>
         <Label title={'상세 주소'}>
            <Input placeholder={'상세주소'} {...addreess_detail.field} error={formState.errors.address_detail && true} />
         </Label>
         <div className={'row justify-between pt-7 z-0'}>
            <Switch.Group {...privacyAccept.field}>
               <Switch className={'row gap-2 items-center relative z-0'}>
                  {({ checked }) => (
                     <>
                        <div className={checked ? ToggleSelectedStyle : ToggleStyle}></div>
                        {checked && <Image className={'absolute '} src={ICON_CHECK} alt={'checked'} width={20} height={20}></Image>}
                        <span>{'개인정보 수집 이용 동의'}</span>
                     </>
                  )}
               </Switch>
            </Switch.Group>

            <p className={'underline'}>{'자세히보기'}</p>
         </div>
         <p className={'text-xs text-error pt-1'}>{formState.errors.privacyAccept?.message}&nbsp;</p>
         <Button disabled={formState.isSubmitting} className={'mt-2 mb-5'} type={'submit'} primary>
            {'상담 신청하기'}
         </Button>
         <Button className={'-mt-1'} border>
            {'VIIK의 가구를 더 살펴보세요'}
         </Button>
      </form>
   );
};
export default ConsultFormRegister;

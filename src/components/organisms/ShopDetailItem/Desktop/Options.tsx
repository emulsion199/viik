import ConsultFormRegister from '#components/organisms/ConsultFormRegister';
import { ShopItem } from '#constants/shop';
import { useMobile } from '#hooks/useMobile';
import { useMount } from '#hooks/useMount';
import { cc, formatNumber } from '#utils/string';
import React from 'react';
import { useController, useFieldArray } from 'react-hook-form';
import Modal from 'src/atoms/Modal';
import Material from 'src/atoms/ShopDetail/Material';
import OptionList from 'src/atoms/ShopDetail/OptionList';
import Palette from 'src/atoms/ShopDetail/Palette';
import useOrderStore from 'src/store/useOrderStore';
import { shopOptionData, useShopOptionForm } from '../form';

interface Props {
   item: ShopItem;
}
const Options = (props: Props) => {
   const { item } = props;
   const isMobile = useMobile(1000);
   const { control, formState, setValue, handleSubmit } = useShopOptionForm(item.options.length);
   const options = useController({
      control,
      name: 'options',
   });
   //MODAL
   const [open, toggle] = React.useReducer(x => !x, false);

   const onChangeOption = React.useCallback(
      (item: { title: string; option: string }, duplicate: boolean) => {
         const option = options.field.value;
         //아예 똑같은 옵션일 때
         const sameOption = option.find(it => it.title === item.title && it.option === item.option);
         setValue(
            'options',
            option.filter(it => !(it.title === item.title && it.option === item.option)),
            { shouldValidate: true }
         );
         if (sameOption) return;

         //같은 종류의 옵션이 있을때
         const optionIdx = option.findIndex(it => it.title === item.title);
         if (optionIdx !== -1 && !duplicate) {
            //같은 종류의 옵션이 있고 중복 거부일때 => 옵션 변경
            option[optionIdx].option = item.option;
            setValue('options', option, { shouldValidate: true });
            return;
         }

         if (optionIdx === -1 || duplicate) {
            //같은 종류의 옵션이 없을때, 중복 허용일때
            setValue('options', [...option, item], { shouldValidate: true });
            return;
         }
      },
      [options]
   );

   //mount
   const mount = useMount();
   //submit
   const orderStore = useOrderStore();

   const onSubmit = React.useCallback((data: shopOptionData) => {
      orderStore.setOptions(data.options);
   }, []);

   return mount ? (
      <form onSubmit={handleSubmit(onSubmit)}>
         <section className={cc('column h-full justify-between gap-3')}>
            {item.options.map((it, idx) => {
               if (it.item[0].imgsrc)
                  return (
                     <>
                        <Material
                           onChange={onChangeOption}
                           className={isMobile ? 'px-3 py-2' : ''}
                           option={it}
                           value={options.field.value}
                        />
                        <hr className={'mt-3 '} />
                     </>
                  );
               if (it.item[0].color)
                  return (
                     <>
                        <Palette
                           onChange={onChangeOption}
                           className={isMobile ? 'px-3 py-2' : ''}
                           option={it}
                           value={options.field.value}
                        />
                        <hr className={'mt-3 '} />
                     </>
                  );
               else
                  return (
                     <>
                        <OptionList
                           onChange={onChangeOption}
                           className={isMobile ? 'px-3 py-2' : ''}
                           option={it}
                           value={options.field.value}
                        />
                        <hr className={'mt-3 '} />
                     </>
                  );
            })}
         </section>
         <section className={isMobile ? 'fixed bottom-0 w-full z-30 ' : ''}>
            <div className={cc(isMobile ? 'h-12 py-2 px-3 border-t border-gray-3 ' : '', 'row justify-between text-p3 pt-2 bg-white')}>
               <span>{'총 상품금액'}</span>
               <span>{`${formatNumber(20120)} 원`}</span>
            </div>
            <button
               onClick={toggle}
               className={cc('primary button transition-all', isMobile ? '' : 'mt-10', !formState.isValid ? 'button !disabled' : '')}
            >
               {'나만의 장바구니'}
            </button>
         </section>

         <Modal title={''} open={open} toggle={toggle}>
            <ConsultFormRegister className={'p-3'} />
         </Modal>
      </form>
   ) : (
      <></>
   );
};

export default Options;

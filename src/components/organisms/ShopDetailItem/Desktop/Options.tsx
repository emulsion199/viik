import { ShopItem } from '#constants/shop';
import { useMobile } from '#hooks/useMobile';
import { cc } from '#utils/string';
import React from 'react';
import { useController, useFieldArray } from 'react-hook-form';
import Material from 'src/atoms/ShopDetail/Material';
import OptionList from 'src/atoms/ShopDetail/OptionList';
import Palette from 'src/atoms/ShopDetail/Palette';
import { useShopOptionForm } from '../form';

interface Props {
   item: ShopItem;
}
const Options = (props: Props) => {
   const { item } = props;
   const isMobile = useMobile(1000);
   const { control, formState, setValue } = useShopOptionForm(item.options.length);
   const options = useController({
      control,
      name: 'options',
   });

   const onChangeOption = React.useCallback(
      (item: { title: string; option: string }) => {
         const option = options.field.value;
         console.log(option);
         const optionIdx = option.findIndex(it => it.title === item.title);
         console.log(optionIdx);
         if (optionIdx !== -1) {
            option[optionIdx].option = item.option;
            setValue('options', option);
         } else {
            setValue('options', [...option, item]);
         }
      },
      [options]
   );

   return (
      <div className={cc('column h-full justify-between')}>
         <section>
            {item.options.map((it, idx) => {
               if (it.item[0].imgsrc)
                  return (
                     <>
                        <Material onChange={onChangeOption} className={isMobile ? 'px-3 py-2' : ''} option={it} />
                        <hr className={'mt-3 '} />
                     </>
                  );
               if (it.item[0].color)
                  return (
                     <>
                        <Palette onChange={onChangeOption} className={isMobile ? 'px-3 py-2' : ''} option={it} />
                        <hr className={'mt-3 '} />
                     </>
                  );
               else
                  return (
                     <>
                        <OptionList onChange={onChangeOption} className={isMobile ? 'px-3 py-2' : ''} option={it} />
                        <hr className={'mt-3 '} />
                     </>
                  );
            })}
         </section>
         <span>{formState.errors.options?.message}</span>
         <section className={isMobile ? 'fixed bottom-0 w-full z-always ' : ''}>
            <div className={cc(isMobile ? 'h-12 py-2 px-3 border-t border-gray-3' : '', 'row justify-between text-p3 pt-2 bg-white')}>
               <span>{'총 상품금액'}</span>
               <span>{'123123원'}</span>
            </div>
            <button onClick={() => console.log(options.field.value)} className={cc('primary button', isMobile ? '' : 'mt-10 ')}>
               {'나만의 장바구니'}
            </button>
         </section>
      </div>
   );
};

export default Options;

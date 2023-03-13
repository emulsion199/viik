import { cc } from '#utils/string';
import React from 'react';

type ButtonProps = React.ComponentPropsWithRef<'button'>;
type ButtonThemes = 'primary' | 'border';
type CustomProps = {
  className?: string;
};
interface ThemeButtonProps extends ButtonProps, Partial<Record<ButtonThemes, boolean>> {}

type Props = ThemeButtonProps & CustomProps;
export const Button = React.forwardRef<HTMLButtonElement, Props>(function Button(props, ref) {
  const {
    className,
    children,
    disabled,

    type = 'button',
    ...rest
  } = props;
  const { primary, border } = rest;
  return (
    <button ref={ref} type={type} className={cc('button', primary ? 'primary' : '', border ? 'border' : '', className)} disabled={disabled}>
      {children}
    </button>
  );
});

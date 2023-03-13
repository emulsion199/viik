import React from 'react';
import { cc } from 'src/utils/string';
type InputProps = React.ComponentPropsWithRef<'input'>;
type CustomProps = {
  className?: string;
  error?: boolean;
};
type Props = InputProps & CustomProps;
export const Input = React.forwardRef<HTMLInputElement, Props>(function (props, ref) {
  const { className, error = false, ...rest } = props;
  return <input ref={ref} className={cc('input', className, error ? 'error' : '')} {...rest}></input>;
});

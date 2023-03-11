import React from "react";
import { cc } from "src/utils/string";
type InputProps = React.ComponentPropsWithRef<"input">;
type CustomProps = {
  className?: string;
};
type Props = InputProps & CustomProps;
const Input = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <input
      className={cc(
        "w-full border border-black h-12 bg-transparent indent-3",
        "outline-none"
      )}
      {...rest}
    ></input>
  );
};
export default Input;

import React from "react";
type LabelProps = React.ComponentPropsWithRef<"label">;
type CustomProps = {
  title?: string;
};

type Props = CustomProps & Omit<LabelProps, keyof CustomProps>;
const Label = (props: Props) => {
  const { title, children, ...labelProps } = props;

  return (
    <label {...{ title }} {...labelProps}>
      <p className={"text-sm "}>{title}</p>
      {children}
    </label>
  );
};

export default React.forwardRef(Label);

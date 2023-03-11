import React from "react";
type LabelProps = React.ComponentPropsWithRef<"label">;
type CustomProps = {
  title?: string;
};

type Props = CustomProps & Omit<LabelProps, keyof CustomProps>;
export const Label = React.forwardRef<HTMLLabelElement, Props>(function Label(
  props,
  ref
) {
  const { title, children, ...labelProps } = props;

  return (
    <label ref={ref} {...{ title }} {...labelProps}>
      <p className={"text-sm "}>{title}</p>
      {children}
    </label>
  );
});

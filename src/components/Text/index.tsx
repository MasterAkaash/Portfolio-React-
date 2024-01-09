import React from "react";

const sizeClasses = {
  txtHeeboBold44: "font-bold font-heebo",
  txtHeeboRegular16: "font-heebo font-normal",
  txtHeeboMedium20: "font-heebo font-medium",
  txtHeeboBold34: "font-bold font-heebo",
  txtHeeboRegular18: "font-heebo font-normal",
  txtHeeboBold26: "font-bold font-heebo",
  txtHeeboMedium24: "font-heebo font-medium",
  txtHeeboRegular14: "font-heebo font-normal",
  txtHeeboMedium20RedA200: "font-heebo font-medium",
  txtHeeboRegular20: "font-heebo font-normal",
  txtHeeboRegular22: "font-heebo font-normal",
  txtHeeboBlack18: "font-black font-heebo",
  txtHeeboBold30: "font-bold font-heebo",
  txtHeeboRegular16Cyan600: "font-heebo font-normal",
  txtHeeboMedium30: "font-heebo font-medium",
  txtHeeboRegular16Black900: "font-heebo font-normal",
  txtHeeboMedium20Bluegray900: "font-heebo font-medium",
  txtHeeboRegular20Bluegray900: "font-heebo font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

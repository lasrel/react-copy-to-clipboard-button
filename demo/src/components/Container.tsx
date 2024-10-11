import { ComponentPropsWithRef } from "react";

interface WrapperProps extends ComponentPropsWithRef<"div"> {
  title?: string;
  noPadding?: boolean;
  noBackground?: boolean;
}
export const Wrapper = ({ noPadding, noBackground, className = "", ...props }: WrapperProps) => (
  <div
    {...props}
    className={`
      ${noBackground ? "" : "bg-surface rounded"}
      ${noPadding ? "" : "p-3"}
      ${className}
    `}
  />
);

const Container = ({ title, children, className = "", ...props }: ComponentPropsWithRef<"div">) => (
  <div {...props} className={`mx-auto max-w-2xl my-10 ${className}`}>
    {title && <h2 className="text-text-secondary mt-10 mb-4 font-semibold uppercase text-lg text-center">{title}</h2>}
    {children}
  </div>
);

export default Container;

import { ComponentPropsWithRef } from "react";

interface ContainerProps extends ComponentPropsWithRef<"div"> {
  title?: string;
  noPadding?: boolean;
  noBackground?: boolean;
}

const Container = ({ title, noPadding, noBackground, className, ...props }: ContainerProps) => (
  <div className="mx-auto max-w-2xl my-4 ">
    {title && <h4 className="mb-1 text-text-secondary mt-8">{title}</h4>}
    <div
      {...props}
      className={`
      ${noBackground ? "" : "bg-surface rounded"}
      ${noPadding ? "" : "p-3"} 
      ${className}
    `}
    />
  </div>
);

export default Container;

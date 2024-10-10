import { ComponentPropsWithRef } from "react";

const Subheadline = ({ children }: ComponentPropsWithRef<"h4">) => (
  <div className="flex gap-4 items-center w-full mb-2 mt-8">
    <h4 className="font-semibold text-text-secondary">{children}</h4>
    <div className="flex-1 h-px border border-dotted border-border" />
  </div>
);

export default Subheadline;

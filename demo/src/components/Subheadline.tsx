import { ComponentPropsWithRef } from "react";

const Subheadline = ({ children }: ComponentPropsWithRef<"h3">) => (
  <h3
    className="
      text-text-secondary text-center mb-4 mt-6 first:mt-0 relative inline-flex justify-center w-max self-center
      after:content-[''] after:w-full after:max-w-20 after:h-px after:bg-border after:absolute after:-bottom-1.5
    "
  >
    {children}
  </h3>
);

export default Subheadline;

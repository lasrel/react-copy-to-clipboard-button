import { ComponentPropsWithRef } from "react";

const Subheadline = ({ children }: ComponentPropsWithRef<"h3">) => <h3 className="text-text-secondary text-sm">{children}</h3>;

export default Subheadline;

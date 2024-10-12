import React, { ComponentPropsWithRef, RefObject } from 'react';

interface CopyButtonProps extends ComponentPropsWithRef<"button"> {
    /** Text to copy or Element to copy from */
    target: RefObject<HTMLElement | HTMLInputElement | HTMLTextAreaElement> | string;
    feedback?: {
        initial?: JSX.Element;
        success: JSX.Element;
        loading?: JSX.Element;
    };
    /** Time in ms until the original Icon comes back */
    duration?: number;
    /** Trim text */
    trim?: boolean;
}
declare const CopyButton: ({ target, feedback, duration, children, trim, ...props }: CopyButtonProps) => React.JSX.Element;

export { CopyButton as default };

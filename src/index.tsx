import React, { ComponentPropsWithRef, RefObject, useState } from "react";

interface CopyButtonProps extends ComponentPropsWithRef<"button"> {
  /** Text to copy or Element to copy from */
  target: RefObject<HTMLElement | HTMLInputElement | HTMLTextAreaElement> | string;
  icons?: {
    prev: JSX.Element;
    temp: JSX.Element;
    loading?: JSX.Element;
  };
  /** Time in ms until the original Icon comes back */
  duration?: number;
  /** Trim text */
  trim?: boolean;
}

const CopyButton = ({ target, icons, duration = 3000, children, trim = true, ...props }: CopyButtonProps) => {
  const [currentIcon, setCurrentIcon] = useState(icons?.prev);

  const copy = async () => {
    // check if clipboard API is supported
    if (!navigator.clipboard) {
      console.error("Clipboard API not supported.");
      return;
    }

    let textToCopy: string | undefined;

    // Handle string or element reference
    if (typeof target === "string") {
      textToCopy = target;
    } else if (target.current instanceof HTMLInputElement || target.current instanceof HTMLTextAreaElement) {
      textToCopy = target.current.value; // Copy from input or textarea field
    } else if (target.current?.isContentEditable) {
      textToCopy = target.current.innerText; // Copy from contenteditable element
    } else if (target.current) {
      textToCopy = target.current.innerText; // Copy from regular element (div, p, etc.)
    }

    if (!textToCopy) {
      console.error("Target element not found or doesn't have text.");
      return;
    }

    // trim text if not disabled
    if (trim) {
      textToCopy = textToCopy.trim();
    }

    try {
      // set loading icon if available
      if (icons?.loading) setCurrentIcon(icons.loading);

      // copy to clipboard
      await navigator.clipboard.writeText(textToCopy);

      // replace icon after copying to clipboard. reset after `duration`
      if (icons) {
        setCurrentIcon(icons.temp);
        setTimeout(() => {
          setCurrentIcon(icons.prev);
        }, duration);
      }
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <button {...props} onClick={copy}>
      {children}
      {currentIcon}
    </button>
  );
};

export default CopyButton;

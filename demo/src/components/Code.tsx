import { Icon } from "@iconify/react";
import { useCollapse } from "react-collapsed";
import { PrismLight as SyntaxHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

const syntaxHighlighterOptions = {
  language: "tsx",
  showLineNumbers: false,
  style: a11yDark,
};

interface CodeBlockProps extends SyntaxHighlighterProps {
  label?: string;
}

export const CodeBlock = ({ children, label, ...props }: CodeBlockProps) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ collapsedHeight: 150 });

  return (
    <>
      {label && <h4 className="text-text-secondary text-sm mb-1">{label}</h4>}
      <section {...getCollapseProps()} className="relative">
        <Code {...props} showLineNumbers>
          {children}
        </Code>
        <div
          className={`
            w-full transition-[height] duration-300 bg-gradient-to-b from-transparent to-background absolute bottom-0 left-0 right-0 
            ${isExpanded ? "h-0" : "h-10"}
          `}
        />
      </section>

      <button {...getToggleProps()} className="text-sm text-text-secondary py-2 w-full flex items-center justify-center gap-2">
        {isExpanded ? "Show Less" : "Show More"}
        <Icon icon="ph:code" />
      </button>
    </>
  );
};

export const Code = ({ children, ...props }: SyntaxHighlighterProps) => {
  return (
    <div className="code-container rounded overflow-hidden text-sm">
      <SyntaxHighlighter {...syntaxHighlighterOptions} {...props} customStyle={{ margin: 0, padding: ".5rem .75rem", borderRadius: 0 }}>
        {typeof children === "string" ? children.trim() : children.map((child) => child.trim())}
      </SyntaxHighlighter>
    </div>
  );
};

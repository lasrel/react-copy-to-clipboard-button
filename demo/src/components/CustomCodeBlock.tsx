import { Icon } from "@iconify/react";
import { useState } from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";
import Container from "./Container";

const codeBlockOptions = {
  language: "tsx",
  showLineNumbers: true,
  theme: a11yDark,
  customStyle: { fontSize: ".9rem" },
  codeBlock: true,
};

const CustomCodeBlock = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container noPadding noBackground className="flex flex-col gap-2">
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="text-sm text-text-secondary inline-flex items-center gap-2">
            {isOpen ? "Hide Code" : "Show Code"}
            <Icon icon="ph:code" />
          </button>
        </div>
        {isOpen && <CopyBlock {...codeBlockOptions} text={text} customStyle={{ fontSize: ".9rem" }} />}
      </Container>
    </>
  );
};

export default CustomCodeBlock;

import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";
import CopyButton from "react-copy-to-clipboard-button";
import Container from "./components/Container";
import CustomCodeBlock from "./components/CustomCodeBlock";
import Subheadline from "./components/Subheadline";
import TestCopy from "./components/TestCopy";
import "./styles/main.css";

const codeBlockOptions = {
  language: "jsx",
  showLineNumbers: false,
  theme: a11yDark,
  customStyle: { fontSize: ".9rem" },
  codeBlock: true,
};

const App = () => {
  const demoInputRef = useRef<HTMLInputElement>(null);
  const demoDivRef = useRef<HTMLDivElement>(null);
  const demoIconToggleRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Container title="Usage" noBackground noPadding>
        <div className="flex flex-col gap-2">
          <CopyBlock {...codeBlockOptions} showLineNumbers={false} text={`import CopyButton from "react-copy-to-clipboard-button";`} />
          <CopyBlock {...codeBlockOptions} showLineNumbers={false} text={`<CopyButton target={"Copied Text"}>Copy</CopyButton>`} />
        </div>
      </Container>

      <Container noBackground noPadding>
        <TestCopy />
      </Container>

      <Container title="From Ref">
        <div className="flex flex-col gap-2">
          <Subheadline>Reference an input to copy it's value</Subheadline>
          <div className="flex gap-2">
            <input type="text" defaultValue="hello" ref={demoInputRef} className="input" />
            <CopyButton target={demoInputRef} className="button">
              Copy Input
            </CopyButton>
          </div>

          <CopyBlock
            {...codeBlockOptions}
            text={`<input type="text" defaultValue="hello" ref={demoInputRef} />
<CopyButton target={demoInputRef}>Copy Input</CopyButton>`}
          />

          <Subheadline>Reference an Element like a DiV</Subheadline>
          <div className="flex gap-4">
            <div ref={demoDivRef} className="bg-surface-top p-2 rounded text-sm">
              This is text inside a DIV
            </div>
            <CopyButton target={demoDivRef} className="button">
              Copy Div Text
            </CopyButton>
          </div>
          <CopyBlock
            {...codeBlockOptions}
            text={`<div ref={demoDivRef} className="bg-surface-top p-2 rounded text-sm">This is text inside a DIV</div>
<CopyButton target={demoDivRef}>Copy Div Text</CopyButton>`}
          />
        </div>
      </Container>

      <CustomCodeBlock
        text={
          /*js*/ `import CopyButton from "react-copy-to-clipboard-button";

const App = () => {
    const demoInputRef = useRef<HTMLInputElement>(null);
    const demoDivRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <div>
                <input type="text" defaultValue="hello" ref={demoInputRef} />
                <CopyButton target={demoInputRef}>Copy Input</CopyButton>
            </div>
            <div>
                <div ref={demoDivRef} className="bg-surface-top p-2 rounded text-sm">This is text inside a DIV</div>
                <CopyButton target={demoDivRef}>Copy Div Text</CopyButton>
            </div>
        </div>
    )
};`
        }
      />

      <Container title="Use Icons">
        <div className="flex flex-col gap-2">
          <Subheadline>Toggle Icon after copy</Subheadline>
          <div className="flex gap-2">
            <input ref={demoIconToggleRef} type="text" defaultValue="Copy me to toggle the icon" className="input" />
            <CopyButton target={demoIconToggleRef} icons={{ prev: <Icon icon="ph:copy" />, temp: <Icon icon="ph:check" /> }} className="button" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;

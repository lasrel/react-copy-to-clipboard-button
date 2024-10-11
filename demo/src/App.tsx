import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef } from "react";
import CopyButton from "react-copy-to-clipboard-button";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import { Code, CodeBlock } from "./components/Code";
import Container, { Wrapper } from "./components/Container";
import Subheadline from "./components/Subheadline";
import TestCopy from "./components/TestCopy";
import "./styles/main.css";

const App = () => {
  const demoInputRef = useRef<HTMLInputElement>(null);
  const demoDivRef = useRef<HTMLDivElement>(null);
  const demoIconToggleRef = useRef<HTMLInputElement>(null);
  const demo1Ref = useRef<HTMLDivElement>(null);
  const demo2Ref = useRef<HTMLDivElement>(null);
  const demo3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    SyntaxHighlighter.registerLanguage("tsx", tsx);
  }, []);

  return (
    <div className="relative">
      <Container title="Usage">
        <Wrapper>
          <div className="flex flex-col gap-1">
            <Code>{`import CopyButton from "react-copy-to-clipboard-button";`}</Code>
            <Code>{`<CopyButton target={"Copied Text"}>Copy</CopyButton>`}</Code>
          </div>
        </Wrapper>
      </Container>

      <TestCopy />

      <Container title="From Ref">
        <Wrapper className="mb-4">
          <div className="flex flex-col gap-2">
            <Subheadline>Reference an input to copy it's value</Subheadline>
            <div className="flex gap-2">
              <input type="text" defaultValue="Copy me!" ref={demoInputRef} className="input" />
              <CopyButton target={demoInputRef} className="button">
                Copy Input
              </CopyButton>
            </div>

            <Subheadline>Reference an Element like a DiV to copy it's innerTEXT</Subheadline>

            <div className="flex gap-2">
              <div ref={demoDivRef} className="bg-surface-top p-2 rounded text-sm flex-1">
                This is text inside a DIV
              </div>
              <CopyButton target={demoDivRef} className="button">
                Copy Div Text
              </CopyButton>
            </div>
          </div>
        </Wrapper>

        <CodeBlock label="Ref Example">
          {
            /*js*/ `
import CopyButton from "react-copy-to-clipboard-button";

const App = () => {
  const demoInputRef = useRef<HTMLInputElement>(null);
  const demoDivRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div>
        <input type="text" defaultValue="Copy me!" ref={demoInputRef} />
        <CopyButton target={demoInputRef}>Copy Input</CopyButton>
      </div>
      <div>
        <div ref={demoDivRef}>This is text inside a DIV</div>
        <CopyButton target={demoDivRef}>Copy Div Text</CopyButton>
      </div>
    </div>
  )
};
`
          }
        </CodeBlock>
      </Container>

      <Container title="Use Icons">
        <Wrapper className="mb-4">
          <div className="flex flex-col gap-2">
            <Subheadline>Toggle Icon after copy</Subheadline>
            <div className="flex gap-2">
              <input ref={demoIconToggleRef} type="text" defaultValue="Click the button to copy me and toggle the icon" className="input" />
              <CopyButton target={demoIconToggleRef} icons={{ prev: <Icon icon="ph:copy" />, temp: <Icon icon="ph:check" /> }} className="button" />
            </div>
            <Code>
              {`
icons?: {
  prev: JSX.Element;      // Default Icon shown
  temp: JSX.Element;      // Replaces 'prev' for 'duration'
  loading?: JSX.Element;  // Shown while waiting for copy
};
duration?: number;        // Time in ms until the original Icon returns. Default 3000.
                          // 0 disables the toggle and keeps the 'temp' icon after copy.
              `}
            </Code>
          </div>
        </Wrapper>

        <CodeBlock label="Icon Example">
          {
            /*js*/ `
import CopyButton from "react-copy-to-clipboard-button";

const App = () => {
  const demoIconToggleRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={demoIconToggleRef} type="text" defaultValue="Click the button to copy me and toggle the icon" className="input" />
      <CopyButton 
        target={demoIconToggleRef} 
        icons={{ 
          prev: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 28H88a12 12 0 0 0-12 12v36H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-36h36a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-60 176H52V100h104Zm48-48h-24V88a12 12 0 0 0-12-12h-68V52h104Z"></path></svg>, 
          temp: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m229.66 77.66l-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69L218.34 66.34a8 8 0 0 1 11.32 11.32"></path></svg>,
        }}
      />
    </div>
  )
};
`
          }
        </CodeBlock>
      </Container>

      <Container title="More Examples">
        <Wrapper>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-text-secondary text-sm">Button inside div</p>
              <div className="p-2 bg-primary/10 rounded text-sm flex items-center gap-2">
                <span className="text-text-secondary shrink-0">Your Key:</span>
                <span ref={demo1Ref} className="flex-1 text-primary">
                  K7YVAR5t9ISCOpu9Xl7oUyVim46H0C88
                </span>
                <CopyButton
                  target={demo1Ref}
                  icons={{ prev: <Icon icon="ph:copy" />, temp: <Icon icon="ph:check" /> }}
                  className="border border-primary/70 rounded p-1 inline-flex items-center justify-center text-base"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-text-secondary text-sm">Text inside Button. Whole DIV is clickable</p>
              <CopyButton
                className="p-2 bg-primary/10 rounded text-sm flex items-center gap-2"
                target={demo2Ref}
                icons={{ prev: <Icon icon="ph:copy" className="text-lg" />, temp: <Icon icon="ph:check" className="text-lg" /> }}
              >
                <span className="text-text-secondary shrink-0">Your Key:</span>
                <span className="flex-1 text-primary text-start" ref={demo2Ref}>
                  NTakMo466D9ztHMBIEYxVmhmXvk2BCK8
                </span>
              </CopyButton>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-text-secondary text-sm">Text inside Button. Whole DIV is clickable</p>
              <CopyButton
                className="p-2 bg-primary/10 rounded text-sm flex items-center gap-2"
                target={demo3Ref}
                duration={0}
                icons={{ prev: <Icon icon="ph:copy" className="text-lg" />, temp: <Icon icon="ph:check" className="text-lg" /> }}
              >
                <span className="text-text-secondary shrink-0">Your Key:</span>
                <span className="flex-1 text-primary text-start" ref={demo3Ref}>
                  ZmMwe3DoqEe6erkKR7UX824OWa3Dd68C
                </span>
              </CopyButton>
            </div>
          </div>
        </Wrapper>

        <CodeBlock label="Example Code">
          {
            /*js*/ `
import CopyButton from "react-copy-to-clipboard-button";

const App = () => {
  const demo1Ref = useRef<HTMLDivElement>(null);
  const demo2Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-text-secondary text-sm">Button inside div</p>
        <div className="p-2 bg-primary/10 rounded text-sm flex items-center gap-2">
          <span className="text-text-secondary shrink-0">Your Key:</span>
          <span ref={demo1Ref} className="flex-1 text-primary">
            K7YVAR5t9ISCOpu9Xl7oUyVim46H0C88
          </span>
          <CopyButton
            target={demo1Ref}
            icons={{ prev: <Icon icon="ph:copy" />, temp: <Icon icon="ph:check" /> }}
            className="bg-primary/50 rounded p-1 inline-flex items-center justify-center text-base"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-text-secondary text-sm">Text inside Button. Whole DIV is clickable</p>
        <CopyButton
          className="p-2 bg-primary/10 rounded text-sm flex items-center gap-2"
          target={demo2Ref}
          icons={{ prev: <Icon icon="ph:copy" className="text-lg" />, temp: <Icon icon="ph:check" className="text-lg" /> }}
        >
          <span className="text-text-secondary shrink-0">Your Key:</span>
          <span className="flex-1 text-primary text-start" ref={demo2Ref}>
            NTakMo466D9ztHMBIEYxVmhmXvk2BCK8
          </span>
        </CopyButton>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-text-secondary text-sm">Text inside Button. Whole DIV is clickable</p>
        <CopyButton
          className="p-2 bg-primary/10 rounded text-sm flex items-center gap-2"
          target={demo3Ref}
          duration={0}
          icons={{ prev: <Icon icon="ph:copy" className="text-lg" />, temp: <Icon icon="ph:check" className="text-lg" /> }}
        >
          <span className="text-text-secondary shrink-0">Your Key:</span>
          <span className="flex-1 text-primary text-start" ref={demo3Ref}>
          ZmMwe3DoqEe6erkKR7UX824OWa3Dd68C
          </span>
        </CopyButton>
      </div>
    </div>
  )
};
          `
          }
        </CodeBlock>
      </Container>
    </div>
  );
};

export default App;

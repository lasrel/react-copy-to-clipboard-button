export const codeBlocks = {
  /*js*/
  simple: {
    code: `import CopyButton from "react-copy-to-clipboard-button";

const App = () => {
  return <CopyButton target={inputRef}>Copy</CopyButton>
}`,
  },
  simpleInput: {
    code: `import CopyButton from "react-copy-to-clipboard-button";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <CopyButton target={inputRef}>Copy</CopyButton>
    </div>
  )
}`,
  },
};

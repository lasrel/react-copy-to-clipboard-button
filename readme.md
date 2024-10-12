# react-copy-to-clipboard-button

Copy-to-clipboard React Button with visual feedback

#### Demo

See live examples [here](https://lasrel.github.io/react-copy-to-clipboard-button).

#### Installation

Installation

```bash
  npm install react-copy-to-clipboard-button
```

#### Usage/Examples

Import

```tsx
import CopyButton from "react-copy-to-clipboard-button";
```

Basic Usage

```tsx
<CopyButton target={"Copied Text"}>Copy</CopyButton>
```

```tsx
<CopyButton target={someRef}>Copy</CopyButton>
```

```tsx
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
  );
};
```

#### Props

| prop               | type                                                                                                       | required | default value |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| `target`           | `string` `HTMLElement` `HTMLInputElement` `HTMLTextAreaElement`                                            | true     |               |
| `feedback`         | object of `JSX.Element`s to show at certain stages after a click.                                          | false    |               |
| `feedback.initial` | Shown initially inside the button.                                                                         | false    |               |
| `feedback.success` | Shown after a successful click/copy.                                                                       | true     |               |
| `feedback.loading` | Shown after a click until copy is done.                                                                    | false    |               |
| `duration`         | Time in ms until the original Icon comes back. If `0` the `feedback.success`-Element will stay after copy. | false    | 3000          |
| `trim`             | Trim the content of `target`.                                                                              | false    | true          |

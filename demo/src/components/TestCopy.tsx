import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Container from "./Container";

const TestCopy = ({ label }: { label?: string }) => {
  const [value, setValue] = useState("");

  return (
    <Container className="sticky top-0 bg-background py-2 z-10">
      <label className="w-full flex flex-col gap-0.5">
        <span className="text-sm text-text-secondary inline-flex gap-1 items-center z-[1] relative">{label ?? <></>}</span>
        <div className="bg-transparent border rounded flex-1 border-green-600 flex gap-1">
          <button
            onClick={() => navigator.clipboard.readText().then((e) => setValue(e))}
            className="p-2 pr-3 text-xs shrink-0 flex items-center justify-center bg-green-600/20 relative text-text-secondary"
          >
            Paste here to test <Icon icon="ph:arrow-arc-right-bold" className="absolute right-0 text-base translate-x-2" />
          </button>
          <input type="text" className="bg-transparent border-none py-2 px-2 text-sm flex-1" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="aspect-square shrink-0 flex items-center justify-center bg-red-600/20" onClick={() => setValue("")}>
            <Icon icon="ph:trash" className="opacity-70 text-lg" />
          </button>
        </div>
      </label>
    </Container>
  );
};

export default TestCopy;

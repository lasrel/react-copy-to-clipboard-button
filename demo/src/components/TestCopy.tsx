const TestCopy = ({ label }: { label?: string }) => (
  <label className="w-full flex flex-col gap-1 sticky top-0">
    <span className="text-sm text-text-secondary">{label ?? "Test Clipboard"}</span>
    <input type="text" className="input" />
  </label>
);

export default TestCopy;

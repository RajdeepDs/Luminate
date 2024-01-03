import dynamic from "next/dynamic";
import TerminalTab from "./terminal-tabs";

const Terminal = dynamic(() => import("./terminal"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function TerminalPanel() {
  return (
    <div className="">
      <TerminalTab />
      <Terminal />
    </div>
  );
}

import dynamic from "next/dynamic";
import TerminalTab from "@/components/editor/terminal/terminal-tabs";

const Terminal = dynamic(
  () => import("@/components/editor/terminal/terminal"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function TerminalPanel() {
  return (
    <div className="">
      <TerminalTab />
      <Terminal />
    </div>
  );
}

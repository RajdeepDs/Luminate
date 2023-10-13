import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

interface SectionHeaderProps {
  icon: IconProps;
  title: string;
}

export default function SectionHeader({ icon, title }: SectionHeaderProps) {
  const LucideIcon = dynamic(dynamicIconImports[icon.name]);
  return (
    <div className="mt-9 flex items-center gap-2">
      <div className="w-fit rounded-lg bg-gray-100 p-2">
        <LucideIcon className="h-5 w-5" />
      </div>
      <h1 className="text-xl font-medium tracking-tighter">{title}</h1>
    </div>
  );
}

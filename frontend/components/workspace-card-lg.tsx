import { Button } from "./ui/button";

import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

interface WorkspaceCardLgProps {
  title: string;
  description: string;
  icon: IconProps;
}

export default function WorkspaceCardLg({
  title,
  description,
  icon,
}: WorkspaceCardLgProps) {
  const LucideIcon = dynamic(dynamicIconImports[icon.name]);
  return (
    <div className="flex h-[272px] w-[343px] flex-col rounded-lg bg-gray-100 px-5 py-4">
      <div className="h-1/3" />
      <div className="flex h-full flex-col items-start justify-end space-y-2">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="w-5/6 text-sm">{description}</p>
        <Button className="mt-4 gap-2">
          <LucideIcon className="h-5 w-5" />
          Create
        </Button>
      </div>
    </div>
  );
}

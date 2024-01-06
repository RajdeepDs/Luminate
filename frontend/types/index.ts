import { Icons } from "@/components/icon";

export type SidebarNavItem = {
  id: number;
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: [];
    }
);

export type SettingsNavigation = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type DashboardConfig = {
  sidebarNav: SidebarNavItem[];
};

export type SettingsConfig = {
  settingsNav: SidebarNavItem[];
};

export type FileTreeDataProp = {
  id: string;
  name: string;
  type: "file" | "folder";
  path: string;
  isCollapsed?: boolean;
  children?: FileTreeDataProp[] | undefined;
  language?: string;
  content?: string;
};

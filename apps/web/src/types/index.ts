import type * as Icons from "@repo/ui/icons";

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

export interface SettingsNavigation {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[];
}

export interface SettingsConfig {
  settingsNav: SidebarNavItem[];
}

export interface FileTreeDataProp {
  id: string;
  name: string;
  type: "file" | "folder";
  path: string;
  isCollapsed?: boolean;
  children?: FileTreeDataProp[] | undefined;
  language?: string;
  content?: string;
}

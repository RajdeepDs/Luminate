import type { SettingsConfig } from "@/types";

export const settingsConfig: SettingsConfig = {
  settingsNav: [
    {
      id: 1,
      title: "Profile",
      href: "/settings/profile",
      icon: "User2",
    },
    {
      id: 2,
      title: "Account",
      href: "/settings/account",
      icon: "UserCog",
    },
    {
      id: 3,
      title: "Sessions",
      href: "/settings/session",
      icon: "Laptop2",
    },
    {
      id: 4,
      title: "Preferences",
      href: "/settings/preferences",
      icon: "Settings",
      disabled: true,
    },
  ],
};

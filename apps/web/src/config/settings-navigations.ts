import { SettingsConfig } from "@/types";

export const settingsConfig: SettingsConfig = {
  settingsNav: [
    {
      id: 1,
      title: "Profile",
      href: "/settings/profile",
      icon: "profile",
    },
    {
      id: 2,
      title: "Account",
      href: "/settings/account",
      icon: "account",
    },
    {
      id: 3,
      title: "Sessions",
      href: "/settings/session",
      icon: "session",
    },
    {
      id: 4,
      title: "Preferences",
      href: "/settings/preferences",
      icon: "settings",
      disabled: true,
    },
  ],
};

export type MainNavigation = {
  title: string;
  href: string;
  disabled?: boolean;
};
export type SettingsNavigation = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainConfig = {
  mainNav: MainNavigation[];
};
export type SettingsConfig = {
  settingsNav: SettingsNavigation[];
};

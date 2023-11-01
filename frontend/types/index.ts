export type MainNavigation = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainConfig = {
  mainNav: MainNavigation[];
};

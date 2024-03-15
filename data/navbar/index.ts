export type NavRoute = {
  label: string; // The label for the navigation item, likely for display purposes.
  path: string; // The path associated with the navigation item, used for routing.
};

export const NavRoutes: NavRoute[] = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about-me",
    path: "/about-me",
  },
  // {
  //   label: "works",
  //   path: "/works",
  // },
  {
    label: "contact-me",
    path: "/contact-me",
  },
];

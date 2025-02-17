import GlobalRoutes from "./GlobalRoutes";
export const SIDEBAR_NAV_MENU_ITEMS = {
  // admin sidebar mainmenu
  mainMenu: [
    {
      name: "Dashboard",
      icon: <i class="bx bxs-home icon"></i>,
      path: GlobalRoutes.adminRoutes.Dashboard,
    },
  ],

  subMenu: [
    {
      name: "master",
      icon: <i class="bx bxs-book-open icon"></i>,
      children: [
        {
          name: "brand master",
          path: GlobalRoutes.adminRoutes.master.BrandMaster,
        },
        {
          name: "medicine type",
          path: GlobalRoutes.adminRoutes.master.MedicineType,
        },
      ],
    },
  ],
  bottomMenu: [
    {
      name: "Logout",
      icon: <i class="bx bxs-log-out-circle icon"></i>,
      path: "#",
    },
  ],
};
// TOP_NAV_ITEMS
export const TOP_NAV_ITEMS = [
  {
    icon: <i class="bx bxs-search"></i>,
    path: "#",
    className: "d-lg-none",
  },
  {
    icon: <i class="bx bxs-grid"></i>,
    path: "demo",
  },
  {
    icon: <i class="bx bxs-bell"></i>,
    path: "demo",
    badge: 1,
  },
  {
    icon: <i class="bx bxs-chat"></i>,
    path: "demo",
    badge: 1,
  },
  {
    icon: <i class="bx bx-menu"></i>,
    onClick: "onToggleSidebar",
  },
];

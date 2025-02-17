import { useRoutes } from "react-router-dom";
import GlobalRoutes from "../Constants/GlobalRoutes";
import { lazyLoadRoutes } from "../Utils/LazyLoader";

// Public Routes
const publicRoutes = [
  {
    path: GlobalRoutes.publicRoutes.LoginPage,
    element: lazyLoadRoutes("Public/Login", false),
  },
];

// Admin Routes
const adminRoutes = [
  {
    path: GlobalRoutes.adminRoutes.Dashboard,
    element: lazyLoadRoutes("Admin/Dashboard", false),
  },
  {
    path: GlobalRoutes.adminRoutes.master.BrandMaster,
    element: lazyLoadRoutes("Admin/Masters/BrandMaster", false),
  },
  {
    path: GlobalRoutes.adminRoutes.master.MedicineType,
    element: lazyLoadRoutes("Admin/Masters/MedicineType", false),
  },
];

// Combined Routes
const webRoutes = [
  {
    path: "/",
    children: [
      ...publicRoutes,
      ...adminRoutes,
      {
        path: "*",
        element: lazyLoadRoutes("NotFound", false),
      },
    ],
  },
];

export function AppRoutes() {
  return useRoutes(webRoutes);
}

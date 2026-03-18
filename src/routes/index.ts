import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const LoginPage = lazy(() => import("@/features/auth/login"));
const Register = lazy(() => import("@/features/auth/register"));
const Home = lazy(() => import("@/features/home"));
const SellerDashboard = lazy(() => import("@/features/seller/dashboard"));
const SellerProduct = lazy(() => import("@/features/seller/product"));

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "seller",
    children: [
      {
        path: "dashboard",
        Component: SellerDashboard,
      },
      {
        path: "product",
        Component: SellerProduct,
      },
    ],
  },
]);

export default Routes;

import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const Login = lazy(() => import("@/features/auth/login"));
const Register = lazy(() => import("@/features/auth/register"));
const Home = lazy(() => import("@/features/home"));

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
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default Routes;

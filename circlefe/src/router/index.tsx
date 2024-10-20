import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Register from "@/pages/register";
import RootLayout from "@/layout/root-outlet";
import AuthLayout from "@/layout/auth-layput";
import Home from "@/pages/home";
import Detail from "@/pages/detail";
import Login from "@/pages/login";
import Profile from "@/pages/profile";
import { Search } from "@/pages/search";
import Follow from "@/pages/follow";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "follow",
        element: <Follow />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "thread/:id",
        element: <Detail />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

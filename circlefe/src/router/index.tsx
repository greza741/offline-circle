import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Register from "@/pages/register";
import Login from "@/pages/login";
import RootLayout from "@/layout/root-outlet";
import AuthLayout from "@/layout/auth-layput";
import Home from "@/pages/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "search",
      //   element: <Search />,
      // },
      // {
      //   path: "follows",
      //   element: <Follows />,
      // },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "thread/:id",
      //   element: <Detail />,
      // },
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

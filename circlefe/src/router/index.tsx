import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Register from "@/pages/register";
import Login from "@/pages/login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <div>home</div>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

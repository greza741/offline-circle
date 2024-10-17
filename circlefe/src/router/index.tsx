import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <div>home</div>,
  },
];

export default function Router() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

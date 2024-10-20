import { useAppSelector } from "@/stores";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const authState = useAppSelector((state) => state.auth);

  if (authState.token) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AuthLayout;

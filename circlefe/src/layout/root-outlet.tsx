import LeftBar from "@/components/sidebar/leftBar/leftBar";
import RightBar from "@/components/sidebar/rightBar/rightBar";
import { useAppSelector } from "@/stores";
import { Box, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const authState = useAppSelector((state) => state.auth);

  if (!authState.token) {
    return <Navigate to="/login" replace />;
  }
  return (
    <Stack direction="row" height="100vh" width="100vw">
      <Box
        sx={{
          maxWidth: "300px",
          flex: 1,
          display: { xs: "none", md: "block" },
        }}
      >
        <LeftBar />
      </Box>
      <Box sx={{ flex: 2, overflow: "auto" }}>
        <Outlet />
      </Box>
      <Box
        sx={{
          maxWidth: "300px",
          flex: 1,
          display: { xs: "none", md: "block" },
          bgcolor: "darkblue",
        }}
      >
        <RightBar />
      </Box>
    </Stack>
  );
};

export default RootLayout;

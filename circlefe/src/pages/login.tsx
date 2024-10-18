import { Box } from "@mui/material";
import LoginForm from "@components/auth/login";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D1D1D",
        height: "100vh",
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default Login;

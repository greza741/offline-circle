import { Box } from "@mui/material";
import RegisterForm from "@components/auth/register";

const Register = () => {
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
      <RegisterForm />
    </Box>
  );
};

export default Register;

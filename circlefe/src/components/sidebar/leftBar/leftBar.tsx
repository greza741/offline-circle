import { useAppDispatch } from "@/stores";
import { LOGOUT } from "@/stores/auth/slice";
import { Box, Button, List, Stack, Typography } from "@mui/material";
import { CiLogout } from "react-icons/ci";
import ContainerIcons from "./container-icon";

const LeftBar = () => {
  const dispatch = useAppDispatch();
  return (
    <Box
      bgcolor="#1D1D1D"
      color="white"
      minHeight="100vh"
      borderRight="1px solid grey"
      p={2}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Box>
        <Stack direction="row" alignItems="center" pl="11%">
          <Typography variant="h2" fontWeight="bold" color="#04A51E">
            circle
          </Typography>
        </Stack>

        <List>
          <ContainerIcons />
        </List>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSize: "100%",
            padding: "10px",
            alignContent: "center",
            width: "100%",
          }}
        >
          <Button
            sx={{
              bgcolor: "#04A51E",
              color: "white",
              borderRadius: "20px",
              width: "100%",
              ":hover": { transform: "translateY(-4px)", boxShadow: "lg" },
            }}
          >
            Create Post
          </Button>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          sx={{
            color: "white",
            ":hover": { transform: "translateY(-4px)", boxShadow: "lg" },
          }}
          startIcon={<CiLogout />}
          onClick={() => dispatch(LOGOUT())}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};
export default LeftBar;

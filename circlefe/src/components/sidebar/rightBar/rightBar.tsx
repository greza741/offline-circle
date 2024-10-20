import { useAppSelector } from "@/stores";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const RightBar = () => {
  const data = useAppSelector((state) => state.auth.user);
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#1D1D1D",
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <Box width={`100%`} height={`10%`}>
        <Box
          sx={{
            margin: "2px 20px",
            backgroundColor: "#262626",
            boxShadow: "2xl",
            borderRadius: `20px`,
            overflow: "hidden",
            color: `white`,
            padding: `2px 20px`,
          }}
        >
          <Box padding={`10px 0px`}>
            <Typography>My Profile</Typography>
          </Box>
          <img
            src={data?.profile?.background}
            style={{
              paddingBottom: `10px`,
              height: "80px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Stack
            spacing={0}
            sx={{
              paddingLeft: "3%",
              marginTop: -5,
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%", // untuk membuat lingkaran
                overflow: "hidden",
                width: "45px",
                height: "45px",
              }}
            >
              <Avatar
                src={data?.profile?.avatar}
                alt="Profile Picture"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>
          <Box display={`flex`} justifyContent={`end`} mt={`-10px`}>
            <Button
              sx={{
                color: "black",
                ":hover": { transform: "translateY(-2px)", boxShadow: "lg" },
                backgroundColor: "white",
                ":active": { transform: "translateY(2px)" },
                fontSize: "8px",
                boxSizing: "border-box",
                padding: "5px 10px",
                borderRadius: "20px",
                border: "1px solid black",
              }}
            >
              Edit Profile
            </Button>
          </Box>
          <Box sx={{ fontSize: "12px" }}>
            <Stack spacing={0} alignItems="flex-start">
              <Typography variant="h5" fontWeight={1000}>
                {data?.profile.fullname}
              </Typography>
              <Typography variant="body2">@{data?.username}</Typography>
              <Typography>{data?.profile.bio}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="start" spacing={2}>
              <Stack direction="row">
                <Typography fontWeight={1000} sx={{ mr: 1 }}>
                  {data?._count.following}
                </Typography>
                <Typography>Followers</Typography>
              </Stack>
              <Stack direction="row">
                <Typography fontWeight={1000} sx={{ mr: 1 }}>
                  {data?._count.follower}{" "}
                </Typography>
                <Typography>Following</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box>suggestion</Box>
        <Box
          margin="2px 20px"
          bgcolor="#262626"
          boxShadow={3}
          borderRadius="20px"
          overflow="hidden"
          color="white"
          padding="2px 20px"
          fontSize="15px"
        >
          <Box display="flex" flexDirection="row" alignItems="center">
            Developed by Suffering •
            <Box display="flex" flexDirection="row" sx={{ ml: 1 }}>
              <Box sx={{ pl: 1 }}>
                <FaGithub />
              </Box>
              <Box sx={{ pl: 1 }}>
                <FaLinkedin />
              </Box>
              <Box sx={{ pl: 1 }}>
                <FaFacebook />
              </Box>
              <Box sx={{ pl: 1 }}>
                <FaInstagram />
              </Box>
            </Box>
          </Box>
          <Typography variant="caption" fontWeight={100}>
            Powered by Dumways Indonesia • #1 Coding Bootcamp
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RightBar;

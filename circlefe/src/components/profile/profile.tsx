import { useAppSelector } from "@/stores";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import TabPanel from "./tab";

const Profile = () => {
  const data = useAppSelector((state) => state.auth.user);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#1D1D1D",
          color: "white",
          minHeight: "100vh",
          borderRight: "1px solid grey",
        }}
      >
        <Box
          sx={{
            margin: "0px 20px",
            bg: "#1D1D1D",
            color: `white`,
          }}
        >
          <Box padding={`10px 0px`} display={"flex"} alignItems={"center"}>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#1D1D1D",
              }}
            >
              <FaArrowLeft color="white" size={"20px"} />
              <Typography fontSize={"20px"} paddingLeft={"20px"}>
                {data?.profile?.fullname}
              </Typography>
            </Button>
          </Box>
          <img
            src={data?.profile?.background}
            style={{
              paddingBottom: `10px`,
              height: "200px",
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
          <Stack
            sx={{
              paddingStart: `3%`,
              mt: -9,
              justifyContent: `start`,
            }}
          >
            <Box
              borderRadius="full"
              overflow="hidden"
              width="100px" // sesuaikan dengan ukuran yang diinginkan
              height="100px" // sesuaikan dengan ukuran yang diinginkan
            >
              <Avatar
                src={data?.profile?.avatar}
                alt="Profile Picture"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Stack>
          <Box display={`flex`} justifyContent={`end`} mt={`-40px`}>
            <Button
              sx={{
                color: "white",
                fontSize: `10px`,
                border: `1px solid white`,
                backgroundColor: "#1D1D1D",
                borderRadius: `20px`,
                ml: "4",
                ":hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "lg",
                },
              }}
            >
              Edit Profile
            </Button>
          </Box>
          <Box p={`2px 0px`}>
            <Stack
              sx={{
                spacing: 0,
                align: "start",
              }}
            >
              <Typography
                fontSize={"25px"}
                fontWeight={1000}
                fontFamily={"body"}
              >
                {data?.profile?.fullname}
              </Typography>
              <Typography fontSize={`10px`} color={"grey"}>
                @{data?.username}
              </Typography>
              <Typography>{data?.profile?.bio}</Typography>
            </Stack>

            <Stack
              sx={{
                flexDirection: "row",
                justify: "start",
              }}
            >
              <Stack direction={`row`} spacing={1} paddingRight={2}>
                <Typography fontWeight={1000}>
                  {data?._count.following}
                </Typography>
                <Typography fontWeight={1}>Followers</Typography>
              </Stack>
              <Stack direction={`row`} spacing={1}>
                <Typography fontWeight={1000}>
                  {data?._count.follower}
                </Typography>
                <Typography fontWeight={1}>Following</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <TabPanel />
      </Box>
    </Box>
  );
};

export default Profile;

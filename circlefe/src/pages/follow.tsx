import { Avatar, Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Follow = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box borderRight="1px solid grey" height={"100vh"}>
      <Box sx={{ borderBottom: 1, display: "flex" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ width: "100%" }}
        >
          <Tab label="Follower" {...a11yProps(0)} sx={{ width: "100%" }} />
          <Tab label="Following" {...a11yProps(1)} sx={{ width: "100%" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src=""
              alt="Profile Picture"
              sx={{ width: 35, height: 35 }}
            />

            <Box textAlign="left" padding={"0px 10px"}>
              <Typography fontWeight="700">test</Typography>
              <Typography color="gray">@test</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src=""
              alt="Profile Picture"
              sx={{ width: 35, height: 35 }}
            />

            <Box textAlign="left" padding={"0px 10px"}>
              <Typography fontWeight="700">test1</Typography>
              <Typography color="gray">@test1</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src=""
              alt="Profile Picture"
              sx={{ width: 35, height: 35 }}
            />

            <Box textAlign="left" padding={"0px 10px"}>
              <Typography fontWeight="700">test2</Typography>
              <Typography color="gray">@test2</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src=""
              alt="Profile Picture"
              sx={{ width: 35, height: 35 }}
            />

            <Box textAlign="left" padding={"0px 10px"}>
              <Typography fontWeight="700">test</Typography>
              <Typography color="gray">@test</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src=""
              alt="Profile Picture"
              sx={{ width: 35, height: 35 }}
            />

            <Box textAlign="left" padding={"0px 10px"}>
              <Typography fontWeight="700">test1</Typography>
              <Typography color="gray">@test1</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src=""
              alt="Profile Picture"
              sx={{ width: 35, height: 35 }}
            />

            <Box textAlign="left" padding={"0px 10px"}>
              <Typography fontWeight="700">test2</Typography>
              <Typography color="gray">@test2</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src=""
              alt="Profile Picture"
              sx={{ width: 35, height: 35 }}
            />

            <Box textAlign="left" padding={"0px 10px"}>
              <Typography fontWeight="700">test</Typography>
              <Typography color="gray">@test</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src=""
              alt="Profile Picture"
              sx={{ width: 35, height: 35 }}
            />

            <Box textAlign="left" padding={"0px 10px"}>
              <Typography fontWeight="700">test1</Typography>
              <Typography color="gray">@test1</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
        <Box
          pt="10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src=""
              alt="Profile Picture"
              sx={{ width: 35, height: 35 }}
            />

            <Box textAlign="left" padding={"0px 10px"}>
              <Typography fontWeight="700">test2</Typography>
              <Typography color="gray">@test2</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                border: "1px solid white",
                color: "white",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "10px",
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
};
export default Follow;

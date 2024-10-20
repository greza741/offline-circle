import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "@/stores";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import { CiCirclePlus } from "react-icons/ci";
import { getFeed } from "@/stores/thread/async";
import { IThreadImage } from "@/type/thread";

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
    <Box>
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
        FOLLOWERS
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        FOLLOWING
      </CustomTabPanel>
    </Box>
  );
};
export default Follow;

import { useAppDispatch, useAppSelector } from "@/stores";
import { getFeed } from "@/stores/thread/async";
import { IThreadImage } from "@/type/thread";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { CiCirclePlus } from "react-icons/ci";
import ThreadMap from "../home/thread-map";

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

interface Props {
  images?: IThreadImage[];
}

const TabPanel: React.FC<Props> = ({ images }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { threads, loading } = useAppSelector((state) => state.thread);
  const id = useAppSelector((state) => state.auth.user?.id!);
  const dispatch = useAppDispatch();

  const [take, setTake] = React.useState(10);

  const handleLoadMore = () => {
    setTake(take + 10);
  };

  React.useEffect(() => {
    dispatch(getFeed(take));
  }, [take]);

  return (
    <Box>
      <Box sx={{ borderBottom: 1, display: "flex" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ width: "100%" }}
        >
          <Tab label="POST" {...a11yProps(0)} sx={{ width: "100%" }} />
          <Tab label="MEDIA" {...a11yProps(1)} sx={{ width: "100%" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>
          {threads
            ?.filter((thread) => thread.user.id === id)
            ?.map((thread) => (
              <ThreadMap key={thread.id} thread={thread} />
            ))}
          {loading && <p>Loading...</p>}
          <Box display={"flex"} justifyContent={"center"}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
              onClick={handleLoadMore}
            >
              <CiCirclePlus size={50} />
            </button>
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        MEDIA
      </CustomTabPanel>
    </Box>
  );
};
export default TabPanel;

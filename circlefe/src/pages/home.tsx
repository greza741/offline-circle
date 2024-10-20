import CreateThread from "@/components/home/create-thread";
import ThreadMap from "@/components/home/thread-map";
import { useAppDispatch, useAppSelector } from "@/stores";
import { getFeed } from "@/stores/thread/async";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { threads, loading } = useAppSelector((state) => state.thread);
  const [take, setTake] = React.useState(10);

  const handleLoadMore = () => {
    setTake(take + 10);
  };

  useEffect(() => {
    dispatch(getFeed(take));
  }, [take]);

  return (
    <Box>
      <Box>
        <Typography paddingLeft={"20px"} fontSize={"20px"} fontWeight={1000}>
          HOME
        </Typography>
      </Box>
      <CreateThread />

      {threads?.map((thread) => (
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
  );
};

export default React.memo(Home);

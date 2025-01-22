// import ThreadMap from "@/components/home/thread/thread-map";
import { useAppDispatch, useAppSelector } from "@/stores";
import { getReplies } from "@/stores/reply/async";
import { getDetailThread } from "@/stores/thread/async";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const id = params.id;
  const threadState = useAppSelector((state) => state.thread);
  const reply = useAppSelector((state) => state.reply.replies);
  useEffect(() => {
    dispatch(getReplies(Number(id)));
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getDetailThread(id));
    }
  }, [id]);

  console.log("DETAIL", threadState.thread);

  return (
    <>
      <Typography>{threadState.thread?.content}</Typography>
      {reply.map((item) => (
        <Typography>{item.content}</Typography>
      ))}
    </>
  );
};

export default Detail;

// import ThreadMap from "@/components/home/thread/thread-map";
import { useAppDispatch, useAppSelector } from "@/stores";
import { getDetailThread } from "@/stores/thread/async";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const id = params.id;
  const threadState = useAppSelector((state) => state.thread);

  useEffect(() => {
    if (id) {
      dispatch(getDetailThread(id));
    }
  }, [id]);

  console.log("DETAIL", threadState.thread);

  return <div>{/* <ThreadMap thread={threadState.thread!} /> */}</div>;
};

export default Detail;

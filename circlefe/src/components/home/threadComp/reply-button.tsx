import { useAppDispatch, useAppSelector } from "@/stores";
import { replyCount } from "@/stores/reply/async";
import { Icon } from "@iconify/react";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReplyButton = ({ threadId }: { threadId: number }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const reply = useAppSelector((state) => state.reply.replyCount);
  const [allreplyCount, setReplyCount] = useState(0);

  useEffect(() => {
    dispatch(replyCount(threadId));
  }, [dispatch]);

  const handleClick = () => {
    navigate(`/thread/${threadId}`);
  };

  return (
    <Stack direction={"row"} sx={{ cursor: "pointer" }} onClick={handleClick}>
      <Icon icon="line-md:chat" style={{ fontSize: "1.5rem" }} />
      <Typography></Typography>
    </Stack>
  );
};

export default ReplyButton;

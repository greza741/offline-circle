import { IThread } from "@/type/thread";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import Content from "./threadComp/content";
import LikeButton from "./threadComp/like-button";
import UserInformation from "./threadComp/user-info";
import ModalDetail from "./threadComp/modalDetail";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

interface Props {
  thread: IThread;
}

const ThreadMap: React.FC<Props> = ({ thread }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/thread/${thread.id}`);
    ``;
  };

  return (
    <Box sx={{ p: 2, borderBottom: "1px solid white" }}>
      <Stack direction={"row"} alignItems={"flex-start"} spacing={2}>
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 60, height: 60, border: "1px solid black" }}
          src={thread?.user?.profile?.avatar}
        />
        <Stack direction={"column"} spacing={1}>
          <UserInformation
            createdAt={thread?.createdAt}
            fullname={thread?.user.profile.fullname}
            username={thread?.user.username}
          />
          <Content
            content={thread?.content}
            images={thread?.images}
            handleClickImage={() => setOpen(true)}
          />
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <LikeButton threadId={thread?.id} />
            <Stack
              direction={"row"}
              sx={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              <Icon icon="line-md:chat" style={{ fontSize: "1.5rem" }} />
              <Typography>{thread._count?.replies}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {thread?.images && (
        <ModalDetail
          threadId={thread?.id}
          handleClose={() => setOpen(false)}
          images={thread.images}
          open={open}
        />
      )}
    </Box>
  );
};

export default ThreadMap;

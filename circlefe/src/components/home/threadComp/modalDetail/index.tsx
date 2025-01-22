import {
  Avatar,
  Box,
  Button,
  Dialog,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SwiperComponent } from "./swiper";
import { IThreadImage } from "@/type/thread";
import { LuImage } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "@/stores";
import { useEffect, useState } from "react";
import { createReply, getReplies } from "@/stores/reply/async";
import { getDetailThread } from "@/stores/thread/async";

const ModalDetail = ({
  open,
  handleClose,
  images,
  threadId,
}: {
  open: boolean;
  handleClose: () => void;
  images: IThreadImage[];
  threadId: number;
}) => {
  const dispatch = useAppDispatch();
  const [content, setContent] = useState("");
  const userId = useAppSelector((state) => state.auth.user!.id);
  const replies = useAppSelector((state) => state.reply.replies);

  useEffect(() => {
    dispatch(getReplies(threadId));
  }, []);

  const handleReplySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(createReply({ content, userId: userId, mainThreadId: threadId }));
    setContent("");
    handleClose();
  };
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <SwiperComponent images={images} />
        <Box
          sx={{
            backgroundColor: "#1D1D1D",
            width: {
              xs: "100%",
              md: "100%",
            },
          }}
        >
          <Box
            paddingLeft="20px"
            paddingTop="20px"
            height="100vh"
            borderBottom={"1px solid white"}
          >
            <Box display="flex" flexDirection="row">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5C8i-TGcY8w9gncSHFx3Vlg2b-fSh1IQSQ&s"
                sx={{ width: 40, height: 40 }}
              />
              <Box
                paddingLeft="25px"
                flex={2}
                borderBottom={"1px solid white"}
                paddingBottom={"20px"}
              >
                <Box>
                  <Stack direction="row">
                    <Typography fontWeight={1000}>fullname</Typography>
                    <Typography fontWeight={1}>@username</Typography>
                    <Typography fontWeight={1}>•</Typography>
                    <Typography fontWeight={1}>date</Typography>
                  </Stack>
                  <Box>
                    <Typography>content</Typography>
                  </Box>
                  <Box paddingTop="10px">
                    <Stack direction="row" alignItems="center">
                      <Box display="flex" alignItems="center">
                        <Typography fontWeight={1} paddingLeft="10px">
                          like
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        paddingLeft="20px"
                      >
                        <Typography fontWeight={1} paddingLeft="10px">
                          Replies
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" paddingTop="30px">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5C8i-TGcY8w9gncSHFx3Vlg2b-fSh1IQSQ&s"
                sx={{ width: 40, height: 40 }}
              />
              <form style={{ width: "90%" }} onSubmit={handleReplySubmit}>
                <Box paddingLeft="25px" display="flex">
                  <TextField
                    variant="outlined"
                    size="small"
                    sx={{ backgroundColor: "#3F3F3F", flex: 1 }}
                    placeholder="Feel free to reply..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <label>
                    <LuImage size={40} />
                    <input
                      // {...register("image")}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </label>
                  <Box paddingLeft="20px">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ backgroundColor: "green", color: "white" }}
                    >
                      reply
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
            <Box>
              <Typography>a</Typography>
              {replies.map((reply) => (
                <Typography key={reply.id}>{reply.content}</Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Stack>
    </Dialog>
  );
};

export default ModalDetail;
